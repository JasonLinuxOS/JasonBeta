/* Firefox settings for Jason Browser - Enhanced Privacy Edition */
/* We also use policies.json to handle the default browser configuration */

// Browser identification
lockPref("general.useragent.override", "Mozilla/5.0 Jason Browser");
lockPref("general.appname.override", "Jason Browser");

/*
  Disable sending telemetry data to Mozilla's server
*/
// Disable check for update
lockPref("app.update.enabled", false);
lockPref("app.update.auto", false);
lockPref("app.update.mode", 0);
lockPref("app.update.service.enabled", false);
// Disable telemetry
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
lockPref("browser.ping-centre.telemetry", false);
lockPref("browser.urlbar.eventTelemetry.enabled", false);
lockPref("security.app_menu.recordEventTelemetry", false);
lockPref("security.identitypopup.recordEventTelemetry", false);
lockPref("security.certerrors.recordEventTelemetry", false);
lockPref("security.protectionspopup.recordEventTelemetry", false);
lockPref("security.xfocsp.errorReporting.enabled", false);
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.server", "");
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.pioneer-new-studies-available", false);
lockPref("toolkit.telemetry.cachedClientID", 0);
lockPref("services.sync.telemetry.maxPayloadCount", 0);
// Disable firefox checking default browser
lockPref("browser.shell.checkDefaultBrowser", false);
lockPref("app.normandy.enabled", false);
// Disable health reporter
lockPref("datareporting.policy.firstRunURL", "");
lockPref("datareporting.healthreport.service.enabled", false);
lockPref("datareporting.healthreport.uploadEnabled", false);
// Disable network connectivity test
lockPref("network.captive-portal-service.enabled", false);
// Disable all data upload (Telemetry and FHR)
lockPref("datareporting.policy.dataSubmissionEnabled", false);
// Disable firefox monitors online / offline status
lockPref("network.manage-offline-status", false);

/*
  Settings for extension to not send data to firefox server automatically
*/
// Disable add-on information. https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
pref("extensions.getAddons.cache.enabled", false);
// Remove recommended add-ons
// https://support.mozilla.org/bm/questions/1264852
pref("extensions.htmlaboutaddons.inline-options.enabled", false);

/*
  Privacy and tracking protection settings
  https://wiki.mozilla.org/Security/Tracking_protection
*/
// Set privacy protection to maximum. In lastest test, Firefox shows Custom.
pref("browser.contentblocking.category", "strict");
// Force enable all other tracking protection features
pref("privacy.trackingprotection.socialtracking.enabled", true);
pref("privacy.trackingprotection.pbmode.enabled", true);
pref("privacy.trackingprotection.origin_telemetry.enabled", true);
pref("privacy.trackingprotection.enabled", true);
pref("privacy.trackingprotection.cryptomining.enabled", true);
pref("privacy.resistFingerprinting", true);
pref("privacy.donottrackheader.enabled", true);
/*
  Set cookie protection in Privacy Custom mode
  network.cookie.cookieBehavior
  0. Disable this option
  1. All Third-party cookies
  2. All cookies
  3. Cookies from unvisited websites
  4. Cross-site tracking cookies - Include social media cookies
*/
pref("network.cookie.cookieBehavior", 5); // FIXME firefox doesn't use this option
// Private Browser mode.
pref("network.cookie.cookieBehavior.pbmode", 5);
// Enable first-party isolation. License: MIT @pyllyukko
// NOTICE: First-party isolation breaks Microsoft Teams
// NOTICE: First-party isolation causes HTTP basic auth to ask for credentials for every new tab
pref("privacy.firstparty.isolate", true);
// Disable Geo info by default. License MIT @pyllyukko
// pref("geo.enabled", false);
// Disable netinfo via DOM. Possibly protect user from Javascript websites. License MIT @pyllyukko
// pref("dom.netinfo.enabled", false);
// Disable gamepad api to prevent USB enumeration. License MIT @pyllyukko. https://trac.torproject.org/projects/tor/ticket/13023
pref("dom.gamepad.enabled", false);
// Prevent leaking locale / date format License MIT @pyllyukko
pref("javascript.use_us_english_locale", true);
// Disable GeoIP lookup to set search engine region. License MIT @pyllyukko. https://trac.torproject.org/projects/tor/ticket/16254
// pref("browser.search.countryCode", "US"); It isn't in latest firefox-esr anymore
pref("browser.search.region", "US");
lockPref("browser.region.update.enabled", false);
lockPref("browser.region.update.region", "");
// pref("browser.search.geoip.url", ""); It isn't in latest firefox-esr anymore
// Enable contextual identity Containers. License MIT @pyllyukko
pref("privacy.userContext.enabled", true);
// Disable Firefox's content block monitor report
pref("browser.contentblocking.report.monitor.enabled", false);
// Disable Firefox show mobile app report
pref("browser.contentblocking.report.show_mobile_app", false);
// Disable Firefox report VPN enabled
pref("browser.contentblocking.report.vpn.enabled", false);
// TODO think about media.webvtt.regions.enabled
// Do not expose info when WebGL is enabled. License MIT @pyllyukko
pref("webgl.enable-debug-renderer-info", false);
// Disable remote debugging (Disabled by default). License MIT @pyllyukko
// pref("devtools.debugger.remote-enabled", false);
// pref("devtools.debugger.force-local", true);
/*
  Some interesting settings that might break UX
  License MIT @pyllyukko
*/
// Disable video stats to reduce fingerprinting
pref("media.video_stats.enabled", false);
// Don't use document specified fonts to prevent installed font enumeration
// Disable because it made google meet (and possibly some other websites) have font problem
// Fix for users: change value to 1
// pref("browser.display.use_document_fonts", 0);

// Don't ask to install the Flash plugin
pref("plugins.notifyMissingFlash", false);

// Allow onion domains
// Send DNS requuest through SOCKS when SOCKS proxy is in use. This might fix the complains about DNS leak when test with firefox
// License MIT @pyllyukko https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers
pref("network.proxy.socks_remote_dns", true);
pref("network.dns.blockDotOnion", true);
// Disable DNS prefectching. License MIT @pyllyukko
pref("network.dns.disablePrefetch", true);
pref("network.dns.disablePrefetchFromHTTPS", true);
// Disable the predictive service (Necko)
pref("network.predictor.enabled", false);
// Set proxy settings
// System Tor Integration - use system-wide Tor configuration
// The system will handle all Tor routing, no specific proxy settings needed

// Enable optimal .onion address handling
lockPref("network.dns.blockDotOnion", false);       // Allow .onion addresses
lockPref("dom.securecontext.allowlist_onions", true);  // Treat .onion as secure origins
lockPref("network.http.referer.hideOnionSource", true);  // Hide referrers from .onion sites
lockPref("network.proxy.autoconfig_url", "file:///etc/jason/onion.pac");
lockPref("network.proxy.socks", "127.0.0.1");
lockPref("network.proxy.socks_port", 9050);
lockPref("network.proxy.socks_remote_dns", true);
lockPref("network.proxy.no_proxies_on", "");

// Enhanced WebRTC protection (prevents IP leakage)
lockPref("media.peerconnection.enabled", false);
lockPref("media.peerconnection.turn.disable", true);
lockPref("media.peerconnection.use_document_iceservers", false);
lockPref("media.peerconnection.video.enabled", false);
lockPref("media.peerconnection.identity.timeout", 1);
pref("network.proxy.type", 2);
// Set default search engine and privacy settings for it
pref("browser.search.hiddenOneOffs", "Google,Amazon.com,Bing");
pref("browser.search.defaultenginename", "DuckDuckGo");
pref("browser.urlbar.placeholderName", "DuckDuckGo");
pref("browser.search.hiddenOneOffs", "Bing,Amazon.com,eBay,Twitter");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "DuckDuckGo");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "DuckDuckGo");
pref("browser.policies.runOncePerModification.setDefaultSearchEngine", "DuckDuckGo");
// Improve search's privacy
lockPref("browser.search.isUS", false);
pref("browser.search.official", false);
pref("browser.search.update", false);
// pref("browser.search.suggest.enabled", false);
// Do not suggest when type in URL bar, which sends data to search engine in first place. License: MIT @pyllyukko
pref("browser.urlbar.suggest.searches", false);
// When using the location bar, don't suggest URLs from browsing history. License: MIT @pyllyukko
// pref("browser.urlbar.suggest.history", false);

/*
 // WebRTC and Media Management - Enhanced for Jason Browser
*/

// Force private browsing mode always - Maximum Privacy
lockPref("browser.privatebrowsing.autostart", true);

// Enhanced fingerprinting protection
lockPref("privacy.resistFingerprinting", true);
lockPref("privacy.resistFingerprinting.block_mozAddonManager", true);
lockPref("privacy.resistFingerprinting.letterboxing", true);
lockPref("privacy.userContext.enabled", true);
lockPref("privacy.userContext.ui.enabled", true);

// Disable media devices
lockPref("media.navigator.enabled", false);
lockPref("media.navigator.video.enabled", false);
lockPref("media.getusermedia.screensharing.enabled", false);
lockPref("media.getusermedia.audiocapture.enabled", false);

/*
  Customize layout
*/
// Disable URL trim so protocol is forced to show
lockPref("browser.urlbar.trimURLs", false);
// Hide title bar to save some space
pref("browser.tabs.inTitlebar", 1);
// Don't show WhatsNew on first run after every update
pref("browser.startup.homepage_override.mstone", "ignore");
// Dark theme for devtools
pref("devtools.theme", "dark");
// Force firefox to use dark theme.
pref("browser.theme.toolbar-theme", 0);
pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
// Don't show 'know your rights' on first run
pref("browser.rights.3.shown", true);
pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"home-button\",\"stop-reload-button\",\"urlbar-container\",\"save-to-pocket-button\",\"privatebrowsing-button\",\"library-button\",\"downloads-button\",\"fxa-toolbar-menu-button\",\"ublock0_raymondhill_net-browser-action\",\"developer-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"personal-bookmarks\"]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"ublock0_raymondhill_net-browser-action\"],\"dirtyAreaCache\":[\"nav-bar\"],\"currentVersion\":17,\"newElementCount\":5}");
// Set startup page
pref("browser.startup.firstrunSkipsHomepage", true);
pref("browser.startup.homepage", "https://duckduckgo.com/");
pref("startup.homepage_welcome_url", "https://duckduckgo.com/");
pref("browser.startup.blankWindow", true);
// Disable pocket suggestion at startup.
lockPref("browser.messaging-system.whatsNewPanel.enabled", false);
// pref("extensions.pocket.enabled", false); // Disable because it's not correct settings I was looking for. User might need it

/*
  Customized new tab page. We disabled activities.
*/
pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
pref("extensions.pocket.onSaveRecs", false);
pref("extensions.pocket.showHome", false);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
lockPref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", false);
pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);
pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
pref("browser.newtabpage.activity-stream.feeds.favicon", false);
pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
pref("browser.newtabpage.activity-stream.feeds.places", false);
pref("browser.newtabpage.activity-stream.feeds.prefs", false);
pref("browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher", false);
lockPref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.sections", false);
pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
pref("browser.newtabpage.activity-stream.feeds.topsites", false);
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
pref("browser.newtabpage.activity-stream.newNewtabExperience.enabled", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
pref("browser.newtabpage.activity-stream.showSearch", false);
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
// ===== Advanced Amnesic Mode Configuration =====
// Force complete memory clearing on browser close
lockPref("privacy.sanitize.sanitizeOnShutdown", true);
lockPref("privacy.clearOnShutdown.cache", true);
lockPref("privacy.clearOnShutdown.cookies", true);
lockPref("privacy.clearOnShutdown.downloads", true);
lockPref("privacy.clearOnShutdown.formdata", true);
lockPref("privacy.clearOnShutdown.history", true);
lockPref("privacy.clearOnShutdown.offlineApps", true);
lockPref("privacy.clearOnShutdown.passwords", true);
lockPref("privacy.clearOnShutdown.sessions", true);
lockPref("privacy.clearOnShutdown.siteSettings", true);

// Complete disabling of disk cache and storage
lockPref("browser.cache.disk.enable", false);
lockPref("browser.cache.offline.enable", false);
lockPref("browser.cache.disk_cache_ssl", false);
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);
lockPref("browser.sessionstore.privacy_level", 2);

// Site isolation and advanced process separation
lockPref("fission.autostart", true);
lockPref("privacy.partition.network_state", true);
lockPref("privacy.partition.persistentStorage", true);
lockPref("privacy.partition.serviceWorkers", true);