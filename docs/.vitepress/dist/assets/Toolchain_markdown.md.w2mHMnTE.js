import{_ as d,c as e,o,ag as a}from"./chunks/framework.Qw_rGEbp.js";const r="/DocEngine/assets/image.B71Morjw.png",u=JSON.parse('{"title":"Markdown","description":"","frontmatter":{},"headers":[],"relativePath":"Toolchain/markdown.md","filePath":"Toolchain/markdown.md"}'),h={name:"Toolchain/markdown.md"};function c(l,t,n,b,i,s){return o(),e("div",null,t[0]||(t[0]=[a('<h1 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h1><h2 id="标题段落" tabindex="-1">标题段落 <a class="header-anchor" href="#标题段落" aria-label="Permalink to &quot;标题段落&quot;">​</a></h2><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th></tr></thead><tbody><tr><td>1~6 个 <code>#</code> 对应 1~6 级标题</td><td><code># 一级标题</code></td><td><h1>一级标题</h1></td></tr><tr><td>空行分隔段落</td><td><code>段落1⏎⏎段落2</code></td><td>第一行<br>第二行</td></tr><tr><td>行尾两空格换行</td><td><code>第一行␠␠</code><br><code>第二行</code></td><td>第一行<br>第二行</td></tr></tbody></table><h2 id="文本格式" tabindex="-1">文本格式 <a class="header-anchor" href="#文本格式" aria-label="Permalink to &quot;文本格式&quot;">​</a></h2><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th></tr></thead><tbody><tr><td><code>*斜体*</code> 或 <code>_斜体_</code></td><td><code>*这是斜体*</code></td><td><em>这是斜体</em></td></tr><tr><td><code>**粗体**</code> 或 <code>__粗体__</code></td><td><code>**这是粗体**</code></td><td><strong>这是粗体</strong></td></tr><tr><td><code>~~删除线~~</code></td><td><code>~~已删除~~</code></td><td><s>已删除</s></td></tr><tr><td><code>`行内代码`</code></td><td><code>`print(&quot;Hello&quot;)`</code></td><td><code>print(&quot;Hello&quot;)</code></td></tr></tbody></table><h2 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h2><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th><th>说明</th></tr></thead><tbody><tr><td><code>- 无序列表</code></td><td><code>- 苹果</code><br><code>- 香蕉</code></td><td>• 苹果<br>• 香蕉</td><td>用 <code>-</code>、<code>+</code> 或 <code>*</code></td></tr><tr><td><code>1. 有序列表</code></td><td><code>1. 第一步</code><br><code>2. 第二步</code></td><td>1. 第一步<br>2. 第二步</td><td></td></tr><tr><td>缩进子项</td><td><code>- 水果</code><br><code> - 苹果</code></td><td>• 水果<br> • 苹果</td><td>子项缩进 <strong>2空格</strong></td></tr></tbody></table><hr><h2 id="链接图片" tabindex="-1">链接图片 <a class="header-anchor" href="#链接图片" aria-label="Permalink to &quot;链接图片&quot;">​</a></h2><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th><th>说明</th></tr></thead><tbody><tr><td><code>[文本](URL)</code></td><td><code>[谷歌](https://google.com)</code></td><td><a href="https://google.com" target="_blank" rel="noreferrer">谷歌</a></td><td>超链接文本</td></tr><tr><td><code>![描述](图片URL)</code></td><td><code>![Logo](logo.png)</code></td><td><img src="'+r+'" alt="alt text"></td><td>插入图片</td></tr><tr><td><code>&lt;自动链接&gt;</code></td><td><code>&lt;https://example.com&gt;</code></td><td><a href="https://example.com" target="_blank" rel="noreferrer">https://example.com</a></td><td>自动识别 URL/邮箱</td></tr></tbody></table><hr><h2 id="引用分隔" tabindex="-1">引用分隔 <a class="header-anchor" href="#引用分隔" aria-label="Permalink to &quot;引用分隔&quot;">​</a></h2><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th><th>说明</th></tr></thead><tbody><tr><td><code>&gt; 引用块</code></td><td><code>&gt; 引用内容</code></td><td>&gt; 引用内容</td><td>多行用 <code>&gt;</code> 开头</td></tr><tr><td><code>---</code> 或 <code>***</code></td><td><code>---</code></td><td>显示分隔线</td><td>至少3个符号</td></tr></tbody></table><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">左对齐</th><th style="text-align:center;">居中对齐</th><th style="text-align:right;">右对齐</th></tr></thead><tbody><tr><td style="text-align:left;">数据1</td><td style="text-align:center;">数据2</td><td style="text-align:right;">数据3</td></tr></tbody></table><h2 id="进阶语法" tabindex="-1">进阶语法 <a class="header-anchor" href="#进阶语法" aria-label="Permalink to &quot;进阶语法&quot;">​</a></h2><h3 id="列表扩展" tabindex="-1">列表扩展 <a class="header-anchor" href="#列表扩展" aria-label="Permalink to &quot;列表扩展&quot;">​</a></h3><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th><th>说明</th></tr></thead><tbody><tr><td>任务列表</td><td><code>- [x] 完成</code><br><code>- [ ] 未完成</code></td><td>✓ 完成<br>☐ 未完成</td><td>需 GitHub/Typora 等工具支持</td></tr><tr><td>混合多级列表</td><td><code>1. 主项</code><br><code> - 子项</code></td><td>1. 主项<br> • 子项</td><td>有序+无序混合嵌套</td></tr></tbody></table><hr><h3 id="文本修饰" tabindex="-1">文本修饰 <a class="header-anchor" href="#文本修饰" aria-label="Permalink to &quot;文本修饰&quot;">​</a></h3><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th><th>说明</th></tr></thead><tbody><tr><td><code>==高亮==</code></td><td><code>==重点内容==</code></td><td>==重点内容==</td><td>需 Typora 等支持</td></tr><tr><td><code>&lt;sup&gt;上标&lt;/sup&gt;</code></td><td><code>E=mc&lt;sup&gt;2&lt;/sup&gt;</code></td><td>E=mc²</td><td>HTML 标签实现</td></tr><tr><td><code>&lt;sub&gt;下标&lt;/sub&gt;</code></td><td><code>H&lt;sub&gt;2&lt;/sub&gt;O</code></td><td>H₂O</td><td>HTML 标签实现</td></tr></tbody></table><hr><h3 id="链接扩展" tabindex="-1">链接扩展 <a class="header-anchor" href="#链接扩展" aria-label="Permalink to &quot;链接扩展&quot;">​</a></h3><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th><th>说明</th></tr></thead><tbody><tr><td>参考式链接</td><td><code>[标签][id]</code><br><code>[id]: URL</code></td><td><a href="/DocEngine/">主页</a></td><td>集中管理链接地址</td></tr><tr><td>锚点链接</td><td><code>[跳转标题](#标题名)</code></td><td><a href="#列表">列表</a></td><td>需标题无空格（如 <code>#标题名</code>）</td></tr></tbody></table><hr><h3 id="代码注释" tabindex="-1">代码注释 <a class="header-anchor" href="#代码注释" aria-label="Permalink to &quot;代码注释&quot;">​</a></h3><table tabindex="0"><thead><tr><th>语法</th><th>示例</th><th>效果</th><th>说明</th></tr></thead><tbody><tr><td>代码块语法高亮</td><td><code>&lt;br&gt;```python&lt;br&gt;print()&lt;br&gt;```&lt;br&gt;</code></td><td>带颜色的代码块</td><td>指定编程语言名称，需支持</td></tr><tr><td>脚注</td><td><code>正文</code><br><code>: 注释</code></td><td>正文<sup>1</sup></td><td>需解析器支持</td></tr></tbody></table>',27)]))}const m=d(h,[["render",c]]);export{u as __pageData,m as default};
