/**
 * MC Bridge - Mission Control → Three.js Geometry Connection
 * Polls Mission Control for visual events and triggers geometry morphs
 * 
 * MINIMAL FOOTPRINT - Uses only existing methods:
 * - window.nord.unifiedGeometry.elasticGeometry.morphToShape(shapeName)
 * - window.nord.unifiedGeometry.elasticGeometry.setMaterial(materialName)
 */

(function() {
  'use strict';

  const MC_BRIDGE = {
    // Config
    CONVEX_URL: 'https://agile-crane-840.convex.cloud',
    POLL_INTERVAL: 15000, // 15 seconds (reduced from 5s for performance)
    USER_INTERACTION_PAUSE: 60000, // 60 seconds pause after user interaction
    IDLE_THRESHOLD: 15 * 60 * 1000, // 15 minutes

    // State
    lastEventId: null,
    lastAppliedShape: null, // Track last applied shape to avoid redundant morphs
    lastUserInteraction: 0, // Timestamp of last user morph
    isIdle: false,
    idleAnimationId: null,
    initialized: false,
    
    // Activity type → Geometry + Material mapping
    // Each event type gets UNIQUE geometry to ensure visible morphs
    ACTIVITY_MAP: {
      // task (pending) → structured work
      'task_pending': { geometry: 'structure', material: 'neural' },
      // task (done) → completed dimension
      'task_done': { geometry: 'tesseract', material: 'crystal' },
      // task (default) → maps based on status in event
      'task': { geometry: 'structure', material: 'neural' },
      // research → thinking/exploration state
      'research': { geometry: 'lorenz_attractor', material: 'quantum' },
      // commit → crystallized execution
      'commit': { geometry: 'stellated_dodecahedron', material: 'crystal' },
      // communication types → each gets unique geometry
      'email': { geometry: 'relation', material: 'neural' },
      'meeting': { geometry: 'torus', material: 'organic' },
      'call': { geometry: 'relation', material: 'neural' },
      // notification → adaptive response
      'notification': { geometry: 'adaptation', material: 'organic' },
      // approval_request → crystalline decision point
      'approval_request': { geometry: 'geode', material: 'quantum' },
      // stage_change → brilliant transition
      'stage_change': { geometry: 'diamond_brilliant', material: 'crystal' },
      // deal outcomes
      'deal_won': { geometry: 'nebula_cloud', material: 'organic' },
      'deal_lost': { geometry: 'geode', material: 'crystal' },
      // note type → flowing thoughts
      'note': { geometry: 'flower_of_life', material: 'organic' }
    },

    // Get unified geometry reference
    getGeometry() {
      try {
        return window.nord?.unifiedGeometry?.elasticGeometry;
      } catch (e) {
        return null;
      }
    },

    // Get UnifiedGeometryManager reference
    getManager() {
      try {
        return window.nord?.unifiedGeometry;
      } catch (e) {
        return null;
      }
    },

    // Find theme that contains a specific geometry
    findThemeForGeometry(geometryName) {
      const library = window.VISUAL_ASSET_LIBRARY;
      if (!library) return null;

      for (const [themeKey, theme] of Object.entries(library)) {
        if (theme.forms && theme.forms.some(form => form.name === geometryName)) {
          return themeKey;
        }
      }
      return null;
    },

    // Sync button state to match current geometry
    syncButtonState(geometryName) {
      const manager = this.getManager();
      if (!manager) return;

      const themeKey = this.findThemeForGeometry(geometryName);
      if (!themeKey) return;

      // Update manager's activeThemeKey WITHOUT triggering morphs
      manager.activeThemeKey = themeKey;

      // Update button UI
      if (typeof manager.updateButtonUI === 'function') {
        manager.updateButtonUI();
        console.log(`[MC-Bridge] Synced button state to theme: ${themeKey}`);
      }
    },

    // Fetch latest events from Convex
    async fetchLatestEvents() {
      try {
        const response = await fetch(`${this.CONVEX_URL}/api/query`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: 'visualEvents:latest',
            args: {}
          })
        });
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        return data.value || [];
      } catch (err) {
        console.warn('[MC-Bridge] Fetch error:', err.message);
        return [];
      }
    },

    // Fetch idle status
    async fetchStats() {
      try {
        const response = await fetch(`${this.CONVEX_URL}/api/query`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: 'visualEvents:stats',
            args: {}
          })
        });
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        return data.value || { status: 'idle' };
      } catch (err) {
        console.warn('[MC-Bridge] Stats error:', err.message);
        return { status: 'idle' };
      }
    },

    // Map event to geometry config
    getMapping(event) {
      const type = event.type?.toLowerCase() || 'task';
      const status = event.status?.toLowerCase() || '';
      
      // Check for task with specific status
      if (type === 'task') {
        if (status === 'done' || status === 'auto_done' || status === 'completed') {
          return this.ACTIVITY_MAP['task_done'];
        }
        if (status === 'pending' || status === 'pending_approval') {
          return this.ACTIVITY_MAP['task_pending'];
        }
      }
      
      // Direct type mapping
      return this.ACTIVITY_MAP[type] || this.ACTIVITY_MAP['task'];
    },

    // Apply geometry morph
    applyMapping(mapping) {
      const geo = this.getGeometry();
      if (!geo) {
        console.warn('[MC-Bridge] Geometry not available');
        return false;
      }

      // Skip if shape hasn't changed
      if (this.lastAppliedShape === mapping.geometry) {
        return false; // No change needed
      }

      try {
        // Morph to shape
        if (mapping.geometry && typeof geo.morphToShape === 'function') {
          geo.morphToShape(mapping.geometry);
          this.lastAppliedShape = mapping.geometry;
          console.log(`[MC-Bridge] Morphed to: ${mapping.geometry}`);

          // Sync button state to match geometry
          this.syncButtonState(mapping.geometry);
        }

        // Set material
        if (mapping.material && typeof geo.setMaterial === 'function') {
          geo.setMaterial(mapping.material);
          console.log(`[MC-Bridge] Material set: ${mapping.material}`);
        }

        return true;
      } catch (err) {
        console.error('[MC-Bridge] Apply error:', err);
        return false;
      }
    },

    // Idle breathing animation
    startIdleBreathing() {
      if (this.idleAnimationId) return; // Already running
      
      const geo = this.getGeometry();
      if (!geo || !geo.mesh) return;

      console.log('[MC-Bridge] Starting idle breathing');
      
      const mesh = geo.mesh;
      const baseScale = { x: mesh.scale.x, y: mesh.scale.y, z: mesh.scale.z };
      let phase = 0;
      
      const breathe = () => {
        phase += 0.01;
        const breath = 1 + Math.sin(phase) * 0.03; // Subtle 3% oscillation
        
        mesh.scale.x = baseScale.x * breath;
        mesh.scale.y = baseScale.y * breath;
        mesh.scale.z = baseScale.z * breath;
        
        if (this.isIdle) {
          this.idleAnimationId = requestAnimationFrame(breathe);
        }
      };
      
      this.idleAnimationId = requestAnimationFrame(breathe);
    },

    stopIdleBreathing() {
      if (this.idleAnimationId) {
        cancelAnimationFrame(this.idleAnimationId);
        this.idleAnimationId = null;
        console.log('[MC-Bridge] Stopped idle breathing');
        
        // Reset scale
        const geo = this.getGeometry();
        if (geo && geo.mesh) {
          geo.mesh.scale.set(1, 1, 1);
        }
      }
    },

    // Main poll cycle
    async poll() {
      try {
        // Respect user interaction - pause MC updates for 30s after manual morph
        const timeSinceUserInteraction = Date.now() - this.lastUserInteraction;
        if (timeSinceUserInteraction < this.USER_INTERACTION_PAUSE) {
          const remainingPause = Math.ceil((this.USER_INTERACTION_PAUSE - timeSinceUserInteraction) / 1000);
          console.log(`[MC-Bridge] Paused (user is interacting, ${remainingPause}s remaining)`);
          return;
        }

        // Fetch events and stats in parallel
        const [events, stats] = await Promise.all([
          this.fetchLatestEvents(),
          this.fetchStats()
        ]);

        // Handle idle state
        const nowIdle = stats.status === 'idle';
        if (nowIdle && !this.isIdle) {
          this.isIdle = true;
          this.startIdleBreathing();
        } else if (!nowIdle && this.isIdle) {
          this.isIdle = false;
          this.stopIdleBreathing();
        }

        // Check for new events
        if (events.length > 0) {
          const latestEvent = events[0];

          // Only process if it's a NEW event
          if (latestEvent.id !== this.lastEventId) {
            console.log('[MC-Bridge] New event:', latestEvent.type, latestEvent.title);
            this.lastEventId = latestEvent.id;

            // Apply geometry mapping (will skip if shape hasn't changed)
            const mapping = this.getMapping(latestEvent);
            this.applyMapping(mapping);
          }
        }
      } catch (err) {
        console.error('[MC-Bridge] Poll error:', err);
      }
    },

    // Notify MC-Bridge that user has interacted
    notifyUserInteraction() {
      this.lastUserInteraction = Date.now();
      console.log('[MC-Bridge] User interaction detected, pausing MC updates for 30s');
    },

    // Initialize bridge
    init() {
      if (this.initialized) return;

      // Wait for window.nord to be available
      const checkReady = () => {
        if (this.getGeometry()) {
          console.log('[MC-Bridge] ✓ Connected to NordSym geometry');
          this.initialized = true;

          // Set initial shape to fibonacci_sphere (default) to avoid unnecessary morph on first load
          this.lastAppliedShape = 'fibonacci_sphere';
          console.log('[MC-Bridge] Initial shape set to: fibonacci_sphere');

          // Hook into geometry's morphToShape to detect user interaction
          const geo = this.getGeometry();
          const originalMorphToShape = geo.morphToShape.bind(geo);
          geo.morphToShape = (...args) => {
            // Only notify if this is NOT from MC-Bridge
            const stack = new Error().stack;
            if (!stack.includes('MC_BRIDGE.applyMapping')) {
              this.notifyUserInteraction();
            }
            return originalMorphToShape(...args);
          };

          // Initial poll
          this.poll();

          // Start polling interval
          setInterval(() => this.poll(), this.POLL_INTERVAL);
        } else {
          console.log('[MC-Bridge] Waiting for geometry...');
          setTimeout(checkReady, 1000);
        }
      };

      // Start checking after DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(checkReady, 2000));
      } else {
        setTimeout(checkReady, 2000);
      }
    }
  };

  // Auto-init
  MC_BRIDGE.init();
  
  // Expose for debugging
  window.MC_BRIDGE = MC_BRIDGE;
  
  console.log('[MC-Bridge] Module loaded');
})();
