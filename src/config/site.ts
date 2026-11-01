import config from '../../htk.config.mts';

export const site = {
  ...config.site,
  domain: new URL(config.site.url).hostname,
  product: 'ProvisionOS',
};
