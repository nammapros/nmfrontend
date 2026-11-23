/** Reference sections for the Electrician catalogue. Service options are intentionally omitted. */
export const ELECTRICIAN_GROUPS = [
  { key: "switch-socket", label: "Switch & socket", slugs: ["electrician-new-switchbox-switchboard-installation"] },
  { key: "fan", label: "Fan", slugs: [
    "electrician-fan-repair",
    "electrician-regular-ceiling-fan-installation",
    "electrician-decorative-fan-installation",
    "electrician-smartbldc-fan-installation",
    "electrician-exhaustpedestaltower-fan-installation",
    "electrician-fan-regulator-replacement",
  ] },
  { key: "light", label: "Light", slugs: [
    "electrician-fancy-light-installationreplacement",
    "electrician-tubelight-installation-replacement",
    "electrician-bulb-installationreplacement",
    "electrician-ceiling-light-installation",
    "electrician-hanging-light-installation",
    "electrician-chandelier-installation",
  ] },
  { key: "wiring", label: "Wiring", slugs: [
    "electrician-new-internal-wiring-per-5-m",
    "electrician-new-external-wiring-per-5-m",
  ] },
  { key: "doorbell-security", label: "Doorbell & security", slugs: [
    "electrician-regular-doorbell-installation",
    "electrician-video-doorbell-installation",
    "electrician-wireless-cctv-installation",
  ] },
  { key: "mcb-fuse", label: "MCB/fuse", slugs: [
    "electrician-mcb-fuse-repair-or-replacement",
    "electrician-submeter-installation",
    "electrician-3-phase-changeover-switch-installation",
  ] },
  { key: "appliances", label: "Appliances", slugs: [
    "electrician-home-theatre-installation",
    "electrician-tv-installation",
    "electrician-tv-uninstallation",
    "electrician-sound-bar-installation",
    "electrician-karban-airzone-installation",
    "electrician-inverter-installation",
    "electrician-stabiliser-installation",
    "electrician-inverter-fuse-replacement",
    "electrician-inverter-servicing",
    "electrician-inverter-check-up",
    "electrician-inverter-uninstallation",
  ] },
] as const;
