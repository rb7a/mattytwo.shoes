// import { newTracker } from './../../node_modules/@snowplow/browser-tracker';
// import { SiteTrackingPlugin } from './../../node_modules/@snowplow/browser-plugin-site-tracking';
// import { PerformanceTimingPlugin } from './../../node_modules/@snowplow/browser-plugin-performance-timing';
// import { ClientHintsPlugin } from './../../node_modules/@snowplow/browser-plugin-client-hints';
// import { FormTrackingPlugin, enableFormTracking } from './../../node_modules/@snowplow/browser-plugin-form-tracking';

// newTracker('mattysnowshoes', 'https://2a7cb7a4-d72c-49c6-a653-90f10d8954bd.app.try-snowplow.com', { plugins: [ PerformanceTimingPlugin(), SiteTrackingPlugin(), ClientHintsPlugin(), FormTrackingPlugin() ] }); // Also stores reference at module level

// enableFormTracking() // Switch on form tracking

(function() {
    const doc = document
    const rootEl = doc.documentElement
    const body = doc.body
    const lightSwitch = doc.getElementById('lights-toggle')
        /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    window.addEventListener('load', function() {
        body.classList.add('is-loaded')
    })

    // Reveal animations
    function revealAnimations() {
        sr.reveal('.feature', {
            duration: 600,
            distance: '20px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'right',
            viewFactor: 0.2
        })
    }

    if (body.classList.contains('has-animations')) {
        window.addEventListener('load', revealAnimations)
    }

    // Light switcher
    if (lightSwitch) {
        window.addEventListener('load', checkLights)
        lightSwitch.addEventListener('change', checkLights)
    }

    function checkLights() {
        let labelText = lightSwitch.parentNode.querySelector('.label-text')
        if (lightSwitch.checked) {
            body.classList.add('lights-off')
            if (labelText) {
                labelText.innerHTML = '1'
            }
        } else {
            body.classList.remove('lights-off')
            if (labelText) {
                labelText.innerHTML = '90'
            }
        }
    }
}())