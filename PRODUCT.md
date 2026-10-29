# Gica Alegria

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Famílias que organizam festas infantis em Igaratá e região. Precisam conhecer os serviços, conferir trabalhos e consultar orçamento e disponibilidade.

Público e objetivo confirmados pelo responsável pelo projeto durante o init do Impeccable.

## Product Purpose

Apresentar a Gica Alegria e gerar pedidos de orçamento pelo WhatsApp. O resultado esperado é iniciar o contato entre a família e a empresa.

## Operating Context

O visitante consulta os serviços, a galeria, as cidades atendidas e as perguntas frequentes. Os botões de orçamento abrem o WhatsApp com uma mensagem inicial; os links do Instagram encaminham para o perfil da empresa.

O conteúdo atual lista Igaratá, Santa Isabel, Jacareí, Nazaré Paulista e São José dos Campos como cidades atendidas, com Igaratá em destaque.

## Capabilities and Constraints

- Serviços apresentados no projeto: decoração de festas, kits pegue e monte, algodão-doce e pipoca.
- Site estático em Astro, com Tailwind CSS e animações em GSAP. Não há fluxo de pagamento ou reserva no site.
- Contatos, cidades e descrição estão centralizados em `src/config/site.ts`.
- O repositório contém configuração de publicação por GitHub Actions para HostGator; a publicação efetiva não foi verificada.
- WhatsApp e Instagram ainda contêm valores provisórios. Não tratar esses valores como contatos reais.
- Diferenciais comerciais comprovados e restrições adicionais permanecem em aberto. Não inventar preços, condições, disponibilidade ou promessas.

## Brand Commitments

O nome presente no projeto é Gica Alegria. Os arquivos de marca existentes estão em `src/assets/img/logo-arco.png` e `src/assets/img/logo-nome.png`.

O conteúdo atual está em português brasileiro. Diretrizes adicionais de marca e voz ainda não foram confirmadas.

## Evidence on Hand

- Fotos disponíveis em `src/assets/img/`, utilizadas nas seções de apresentação, serviços e galeria. Sua existência não comprova autoria, direitos de uso ou autorização das pessoas retratadas.
- Os depoimentos em `src/components/Testimonials.astro` são exemplos, conforme comentário no código e README. Não tratá-los como prova social real.
- O README lista como pendentes os contatos reais, depoimentos reais, autorização de imagem e aprovação dos textos pela cliente.

## Product Principles

- Facilitar a compreensão dos serviços e o pedido de orçamento pelo WhatsApp.
- Tornar clara a região atendida para ajudar a família a avaliar o serviço.
- Usar apenas informações comerciais e provas sociais verificadas; manter pendências explícitas até confirmação.
