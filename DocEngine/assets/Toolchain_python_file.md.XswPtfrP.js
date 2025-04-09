import{_ as i,c as a,o as n,ag as e}from"./chunks/framework.Cw7PKvxc.js";const E=JSON.parse('{"title":"文件操作","description":"","frontmatter":{},"headers":[],"relativePath":"Toolchain/python/file.md","filePath":"Toolchain/python/file.md"}'),h={name:"Toolchain/python/file.md"};function t(l,s,k,p,r,d){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="文件操作" tabindex="-1">文件操作 <a class="header-anchor" href="#文件操作" aria-label="Permalink to &quot;文件操作&quot;">​</a></h1><h2 id="打开文件" tabindex="-1">打开文件 <a class="header-anchor" href="#打开文件" aria-label="Permalink to &quot;打开文件&quot;">​</a></h2><h3 id="open-file-mode-r-buffering-1-encoding-none-errors-none-newline-none-closefd-true" tabindex="-1"><code>open(file, mode=&#39;r&#39;, buffering=-1, encoding=None, errors=None, newline=None, closefd=True)</code> <a class="header-anchor" href="#open-file-mode-r-buffering-1-encoding-none-errors-none-newline-none-closefd-true" aria-label="Permalink to &quot;\`open(file, mode=&#39;r&#39;, buffering=-1, encoding=None, errors=None, newline=None, closefd=True)\`&quot;">​</a></h3><p><strong>描述</strong>：核心文件操作函数，用于打开文件并返回文件对象。<br><strong>参数</strong>：</p><ul><li><code>file</code>：必选，文件路径（绝对或相对路径）。</li><li><code>mode</code>：可选，打开模式（默认<code>&#39;r&#39;</code>），支持组合模式： <ul><li>基础模式：<code>r</code>（读）、<code>w</code>（覆盖写）、<code>a</code>（追加写）、<code>x</code>（独占创建）。</li><li>扩展模式：<code>b</code>（二进制模式）、<code>t</code>（文本模式，默认）。</li><li>组合模式：<code>r+</code>（读写）、<code>w+</code>（覆盖读写）、<code>a+</code>（追加读写）。</li></ul></li><li><code>buffering</code>：可选，缓冲区策略（默认-1使用系统策略）。</li><li><code>encoding</code>：可选，文本编码（如<code>&#39;utf-8&#39;</code>），默认与系统相关。</li><li><code>errors</code>：可选，编码错误处理（<code>&#39;strict&#39;</code>、<code>&#39;ignore&#39;</code>、<code>&#39;replace&#39;</code>等）。</li><li><code>newline</code>：可选，换行符控制（如<code>&#39;\\n&#39;</code>、<code>&#39;\\r\\n&#39;</code>）。</li></ul><p><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 读取文本文件（自动关闭）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">encoding</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    content </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f.read()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 写入二进制文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f.write(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\xff\\xd8\\xff\\xe0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># JPEG文件头</span></span></code></pre></div><h2 id="读取文件" tabindex="-1">读取文件 <a class="header-anchor" href="#读取文件" aria-label="Permalink to &quot;读取文件&quot;">​</a></h2><h3 id="read-size-1" tabindex="-1"><code>read(size=-1)</code> <a class="header-anchor" href="#read-size-1" aria-label="Permalink to &quot;\`read(size=-1)\`&quot;">​</a></h3><p><strong>描述</strong>：读取指定字节数（文本模式为字符数），默认读取全部内容。<br><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;log.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chunk </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f.read(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 读取前1024个字符</span></span></code></pre></div><h3 id="readline-size-1" tabindex="-1"><code>readline(size=-1)</code> <a class="header-anchor" href="#readline-size-1" aria-label="Permalink to &quot;\`readline(size=-1)\`&quot;">​</a></h3><p><strong>描述</strong>：逐行读取，保留换行符<code>\\n</code>。<br><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data.csv&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    header </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f.readline()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 读取标题行</span></span></code></pre></div><h3 id="readlines-hint-1" tabindex="-1"><code>readlines(hint=-1)</code> <a class="header-anchor" href="#readlines-hint-1" aria-label="Permalink to &quot;\`readlines(hint=-1)\`&quot;">​</a></h3><p><strong>描述</strong>：读取所有行并返回列表，<code>hint</code>限制总字节数。<br><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;log.log&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lines </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f.readlines()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 适用于小文件</span></span></code></pre></div><h2 id="写入文件" tabindex="-1">写入文件 <a class="header-anchor" href="#写入文件" aria-label="Permalink to &quot;写入文件&quot;">​</a></h2><h3 id="write-s" tabindex="-1"><code>write(s)</code> <a class="header-anchor" href="#write-s" aria-label="Permalink to &quot;\`write(s)\`&quot;">​</a></h3><p><strong>描述</strong>：写入字符串或字节流，返回写入字符/字节数。<br><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;output.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;w&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f.write(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello World</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 覆盖写入</span></span></code></pre></div><h3 id="writelines-lines" tabindex="-1"><code>writelines(lines)</code> <a class="header-anchor" href="#writelines-lines" aria-label="Permalink to &quot;\`writelines(lines)\`&quot;">​</a></h3><p><strong>描述</strong>：写入字符串列表（不会自动添加换行符）。<br><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lines </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Line 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Line 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;notes.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f.writelines(lines)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 追加多行</span></span></code></pre></div><h2 id="文件指针" tabindex="-1">文件指针 <a class="header-anchor" href="#文件指针" aria-label="Permalink to &quot;文件指针&quot;">​</a></h2><h3 id="seek-offset-whence-0" tabindex="-1"><code>seek(offset, whence=0)</code> <a class="header-anchor" href="#seek-offset-whence-0" aria-label="Permalink to &quot;\`seek(offset, whence=0)\`&quot;">​</a></h3><p><strong>描述</strong>：移动文件指针到指定位置。</p><ul><li><code>whence</code>：参考点（0=文件头，1=当前位置，2=文件尾）。</li></ul><p><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data.bin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f.seek(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 跳转到第10字节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f.read(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#从第10字节起读5个字节</span></span></code></pre></div><h3 id="tell" tabindex="-1"><code>tell()</code> <a class="header-anchor" href="#tell" aria-label="Permalink to &quot;\`tell()\`&quot;">​</a></h3><p><strong>描述</strong>：返回当前文件指针的位置。<br><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;log.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f.read(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f.tell()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取当前位置（如100）</span></span></code></pre></div><h2 id="关闭文件" tabindex="-1">关闭文件 <a class="header-anchor" href="#关闭文件" aria-label="Permalink to &quot;关闭文件&quot;">​</a></h2><h3 id="close" tabindex="-1"><code>close()</code> <a class="header-anchor" href="#close" aria-label="Permalink to &quot;\`close()\`&quot;">​</a></h3><p><strong>描述</strong>：手动关闭文件（推荐使用<code>with</code>语句自动管理）。<br><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;temp.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;w&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f.close()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 必须显式关闭</span></span></code></pre></div><h2 id="异常处理" tabindex="-1">异常处理 <a class="header-anchor" href="#异常处理" aria-label="Permalink to &quot;异常处理&quot;">​</a></h2><h3 id="try-except块" tabindex="-1"><code>try-except</code>块 <a class="header-anchor" href="#try-except块" aria-label="Permalink to &quot;\`try-except\`块&quot;">​</a></h3><p><strong>描述</strong>：处理文件操作中的异常（如文件不存在、权限错误）。<br><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;missing.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        content </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f.read()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">except</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FileNotFoundError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;文件不存在！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,41)]))}const g=i(h,[["render",t]]);export{E as __pageData,g as default};
