/**
 * Dados editáveis da Gica Alegria. Preencha os campos marcados com TODO
 * e o site inteiro (botões, rodapé, SEO) se atualiza sozinho.
 */
export const site = {
  name: 'Gica Alegria',
  tagline: 'Festa infantil',
  url: 'https://gicaalegria.gpsoftworks.com',
  description:
    'Decoração de festas, kits pegue e monte, algodão-doce e pipoca em Igaratá, Santa Isabel, Jacareí, Nazaré Paulista e São José dos Campos.',

  // TODO: número com código do país e DDD, só dígitos. Exemplo: 5512999999999
  whatsapp: '5511972242232',
  whatsappMessage: 'Oi! Vi o site da Gica Alegria e quero pedir um orçamento.',

  // TODO: link do Instagram da Gica Alegria
  instagram: 'https://www.instagram.com/gicaalegria?cplk=MWN2aGw4dmExdjVzbA==',

  // A primeira cidade é o foco principal e aparece em destaque.
  cities: ['Igaratá', 'Santa Isabel', 'Jacareí', 'Nazaré Paulista', 'São José dos Campos'],
  region: 'SP',
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
