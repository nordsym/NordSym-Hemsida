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
    POLL_INTERVAL: 5000, // 5 seconds
    IDLE_THRESHOLD: 15 * 60 * 1000, // 15 minutes
    
    // State
    lastEventId: null,
    isIdle: false,
    idleAnimationId: null,
    initialized: false,
    
    // Activity type → Geometry + Material mapping
    ACTIVITY_MAP: {
      // task (pending) → idle state
      'task_pending': { geometry: 'fibonacci_sphere', material: 'neural' },
      // task (done) → executing state
      'task_done': { geometry: 'tesseract', material: 'crystal' },
      // task (default) → maps based on status in event
      'task': { geometry: 'fibonacci_sphere', material: 'neural' },
      // research → thinking state
      'research': { geometry: 'lorenz_attractor', material: 'quantum' },
      // commit → executing state
      'commit': { geometry: 'tesseract', material: 'crystal' },
      // communication types → communicating state
      'email': { geometry: 'relation', material: 'neural' },
      'meeting': { geometry: 'relation', material: 'neural' },
      'call': { geometry: 'relation', material: 'neural' },
      // notification → idle state
      'notification': { geometry: 'fibonacci_sphere', material: 'organic' },
      // approval_request → blocked state
      'approval_request': { geometry: 'geode', material: 'quantum' },
      // stage_change → executing state
      'stage_change': { geometry: 'tesseract', material: 'crystal' },
      // deal outcomes
      'deal_won': { geometry: 'nebula_cloud', material: 'organic' },
      'deal_lost': { geometry: 'geode', material: 'crystal' },
      // note type (common in logs)
      'note': { geometry: 'fibonacci_sphere', material: 'organic' }
    },

    // Get unified geometry reference
    getGeometry() {
      try {
        return window.nord?.unifiedGeometry?.elasticGeometry;
      } catch (e) {
        return null;
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

      try {
        // Morph to shape
        if (mapping.geometry && typeof geo.morphToShape === 'function') {
          geo.morphToShape(mapping.geometry);
          console.log(`[MC-Bridge] Morphed to: ${mapping.geometry}`);
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
          
          if (latestEvent.id !== this.lastEventId) {
            console.log('[MC-Bridge] New event:', latestEvent.type, latestEvent.title);
            this.lastEventId = latestEvent.id;
            
            // Apply geometry mapping
            const mapping = this.getMapping(latestEvent);
            this.applyMapping(mapping);
          }
        }
      } catch (err) {
        console.error('[MC-Bridge] Poll error:', err);
      }
    },

    // Initialize bridge
    init() {
      if (this.initialized) return;
      
      // Wait for window.nord to be available
      const checkReady = () => {
        if (this.getGeometry()) {
          console.log('[MC-Bridge] ✓ Connected to NordSym geometry');
          this.initialized = true;
          
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
