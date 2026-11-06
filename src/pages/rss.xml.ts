import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
const esc = (v:string) => v.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const GET: APIRoute = async ({site}) => {
  const posts = (await getCollection('blog',({data})=>!data.draft)).sort((a,b)=>b.data.pubDate.valueOf()-a.data.pubDate.valueOf());
  const origin = site ?? new URL('https://massage-peredelkino.pages.dev');
  const items = posts.map(p=>'<item><title>'+esc(p.data.title)+'</title><link>'+new URL('/blog/'+p.id+'/',origin)+'</link><guid>'+new URL('/blog/'+p.id+'/',origin)+'</guid><pubDate>'+p.data.pubDate.toUTCString()+'</pubDate><description>'+esc(p.data.description)+'</description></item>').join('');
  const xml = '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Массаж Переделкино</title><link>'+origin+'</link><description>Статьи о классическом и оздоровительном массаже.</description><language>ru</language>'+items+'</channel></rss>';
  return new Response(xml,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
};
