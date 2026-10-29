# Gica Alegria: landing page

Site estático feito com Astro, Tailwind CSS v4 e GSAP. Publicado na HostGator em
`gicaalegria.gpsoftworks.com` por GitHub Actions.

## Rodar no computador

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/
```

## O que editar

| O quê | Onde |
| --- | --- |
| WhatsApp, Instagram, cidades, endereço do site | `src/config/site.ts` |
| Depoimentos | `src/components/Testimonials.astro` |
| Perguntas frequentes | `src/components/Faq.astro` |
| Fotos | `src/assets/img/` (o Astro converte para WebP no build) |
| Cores e fontes | `src/styles/global.css` (bloco `@theme`) |

## Deploy automático

A cada push na branch `main`, o workflow `.github/workflows/deploy.yml` faz o build e
envia a pasta `dist/` por FTP. Cadastre estes secrets em
GitHub, Settings, Secrets and variables, Actions:

| Secret | Exemplo |
| --- | --- |
| `FTP_SERVER` | `ftp.gpsoftworks.com` (ou o IP do servidor na HostGator) |
| `FTP_USERNAME` | usuário FTP criado no cPanel |
| `FTP_PASSWORD` | senha desse usuário FTP |
| `FTP_DIR` | pasta do subdomínio, por exemplo `/gicaalegria.gpsoftworks.com/` (termina com `/`) |

Antes do primeiro deploy, crie o subdomínio `gicaalegria` no cPanel (Domínios) e,
se possível, um usuário FTP limitado a essa pasta.

## Antes de publicar

- [ ] Número de WhatsApp real em `src/config/site.ts`
- [ ] Link do Instagram real
- [ ] Depoimentos reais (os atuais são de exemplo)
- [ ] Autorização de imagem das crianças que aparecem nas fotos
- [ ] Textos aprovados pela cliente
