import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
export const GET:APIRoute = async ({site}) => {
  const origin = site ?? new URL('https://massage-peredelkino.pages.dev');
  const posts = await getCollection('blog',({data})=>!data.draft);
  const paths = ['/','/uslugi/','/kontakty/','/blog/',...posts.map(p=>'/blog/'+p.id+'/')];
  const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(p=>'<url><loc>'+new URL(p,origin)+'</loc></url>').join('')+'</urlset>';
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
