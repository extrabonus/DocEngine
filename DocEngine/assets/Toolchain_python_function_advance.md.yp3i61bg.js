import{_ as i,c as a,o as n,ag as l}from"./chunks/framework.Cw7PKvxc.js";const o=JSON.parse('{"title":"函数高阶用法","description":"","frontmatter":{},"headers":[],"relativePath":"Toolchain/python/function/advance.md","filePath":"Toolchain/python/function/advance.md"}'),t={name:"Toolchain/python/function/advance.md"};function h(p,s,k,e,r,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="函数高阶用法" tabindex="-1">函数高阶用法 <a class="header-anchor" href="#函数高阶用法" aria-label="Permalink to &quot;函数高阶用法&quot;">​</a></h1><h2 id="作用域规则" tabindex="-1">作用域规则 <a class="header-anchor" href="#作用域规则" aria-label="Permalink to &quot;作用域规则&quot;">​</a></h2><p><strong>描述</strong>: LEGB规则（Local -&gt; Enclosed -&gt; Global -&gt; Built-in）。</p><ul><li>Local：函数内部的变量，比如在函数内部定义的变量。</li><li>Enclosed：嵌套函数中，外层函数的变量。例如，闭包中的外部函数变量。</li><li>Global：模块级别的变量，在函数外部定义的变量。</li><li>Built-in：Python内置的变量，比如内置函数或异常类。</li></ul><p><strong>示例</strong>:</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Global</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Local</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">func()       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 20</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 10</span></span></code></pre></div><h2 id="nonlocal关键字" tabindex="-1"><code>nonlocal</code>关键字 <a class="header-anchor" href="#nonlocal关键字" aria-label="Permalink to &quot;\`nonlocal\`关键字&quot;">​</a></h2><p>如果内层函数需要 修改 外层变量（而非读取），必须用 <code>nonlocal</code> 声明：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> outer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        nonlocal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 必须声明！</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inner</span></span></code></pre></div><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><p><strong>描述</strong>: 闭包（Closure）是<strong>一个函数</strong> + <strong>它捕获的外部变量</strong>，使得这个函数可以<strong>记住</strong>它被创建时的上下文环境。</p><h5 id="三个关键条件" tabindex="-1">三个关键条件 <a class="header-anchor" href="#三个关键条件" aria-label="Permalink to &quot;三个关键条件&quot;">​</a></h5><ul><li><strong>嵌套函数</strong>：函数内部定义了另一个函数。</li><li><strong>内部函数使用外部函数的变量</strong>：子函数使用了父函数的局部变量。</li><li><strong>外部函数返回内部函数</strong>：父函数将子函数作为返回值返回。</li></ul><p><strong>示例</strong>:</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> outer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 外层函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 外层函数的局部变量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> inner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 内层函数（闭包）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用了外层函数的变量x</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inner  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返回内层函数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">closure </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> outer()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用outer()，返回inner函数</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(closure())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出 15</span></span></code></pre></div><p><strong>闭包形成</strong>：inner 函数记住了外层函数 outer 的变量 x，即使 outer 已经执行完毕，x 依然存在。</p><h4 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h4><ul><li><strong>状态保持</strong>：代替简单的类（例如计数器、生成器）。</li><li><strong>延迟执行</strong>：预先配置某些参数（类似工厂模式）。</li><li><strong>装饰器</strong>：Python 装饰器的核心实现依赖闭包。</li></ul><h2 id="装饰器" tabindex="-1">装饰器 <a class="header-anchor" href="#装饰器" aria-label="Permalink to &quot;装饰器&quot;">​</a></h2><p><strong>描述</strong>: 是 Python 中一种<strong>动态修改函数行为</strong>的语法工具。它的核心思想是<strong>在不修改原函数代码的前提下，为函数添加额外功能</strong>（如日志、计时、权限验证等）。使用<code>@decorator</code>语法。</p><ul><li><strong>本质</strong>：装饰器是一个高阶函数（接受函数作为参数，并返回函数）。</li><li><strong>作用</strong>：像“包装盒”一样包裹原函数，在调用原函数前后插入新功能。</li><li><strong>语法</strong>：通过@装饰器名的语法糖实现，使代码简洁易读。</li></ul><p><strong>示例</strong>:</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 给函数添加“打印执行时间”的功能。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义装饰器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timer_decorator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(func):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        start_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time.time()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        func()          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用原函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        end_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time.time()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;函数执行耗时: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end_time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start_time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:.2f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">秒&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wrapper</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用装饰器  @timer_decorator 等价于 my_function = timer_decorator(my_function)。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此时，my_function 变量不再指向原来的函数，而是指向 timer_decorator 返回的 wrapper 函数。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@timer_decorator</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> my_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#原函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time.sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;函数执行完毕&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用函数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行路径：my_function() → @timer_decorator → wrapper() → func() (即原 my_function)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_function() </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 函数执行完毕</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 函数执行耗时: 1.00秒</span></span></code></pre></div><h4 id="类比理解" tabindex="-1">类比理解 <a class="header-anchor" href="#类比理解" aria-label="Permalink to &quot;类比理解&quot;">​</a></h4><p>想象你点外卖：</p><ul><li>原函数<code>my_function</code>是厨师做饭。</li><li>装饰器<code>timer_decorator</code>是外卖平台： <ul><li>外卖小哥（<code>wrapper</code>）先去接单（记录开始时间）。</li><li>然后让厨师做饭（调用 <code>func()</code>）。</li><li>最后送餐并计算时间（记录结束时间）。</li></ul></li><li>你通过外卖平台订餐，实际还是厨师做的饭，但多了外卖平台的附加服务。</li></ul><h2 id="lambda函数" tabindex="-1">Lambda函数 <a class="header-anchor" href="#lambda函数" aria-label="Permalink to &quot;Lambda函数&quot;">​</a></h2><p><strong>描述</strong>: 匿名函数，用于简化简单操作的定义。</p><p><strong>示例</strong>:</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">square </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x: x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(square(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 16</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 常用于高阶函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nums </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x: x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, nums)))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: [2, 4, 6]</span></span></code></pre></div><h2 id="生成器函数" tabindex="-1">生成器函数 <a class="header-anchor" href="#生成器函数" aria-label="Permalink to &quot;生成器函数&quot;">​</a></h2><p><strong>描述</strong>:<br> 生成器是一种 <strong>惰性迭代器</strong>，用于按需生成值，而不是一次性生成所有数据。通过 <code>yield</code> 关键字实现（替代<code>return</code>），可大幅节省内存，适用于处理大型数据集或无限序列。</p><p><strong>两种形式</strong>：</p><ol><li><strong>生成器函数</strong>：使用 <code>yield</code> 语句的函数。</li><li><strong>生成器表达式</strong>：类似列表推导式，但用 <code>()</code> 包裹。</li></ol><p><strong>特点</strong>：</p><ul><li>每次调用 <code>next()</code> 或迭代时执行到 <code>yield</code> 后暂停，保留当前状态。</li><li>再次迭代时从上次暂停的位置继续执行。</li></ul><p><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> count_up_to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建生成器对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">counter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> count_up_to(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># print(next(counter))  # 抛出 StopIteration 异常</span></span></code></pre></div><p><strong>生成器表达式</strong></p><p><strong>定义</strong>：<br> 语法类似列表推导式，但使用 <code>()</code> 替代 <code>[]</code>，按需生成值。</p><p><strong>特点</strong>：</p><ul><li>内存效率高（不预先生成所有元素）。</li><li>适合简单的一次性迭代场景。</li></ul><p><strong>示例</strong>：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成器表达式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">squares </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 迭代生成器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> squares:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 0, 1, 4, 9, 16</span></span></code></pre></div><h2 id="递归函数" tabindex="-1">递归函数 <a class="header-anchor" href="#递归函数" aria-label="Permalink to &quot;递归函数&quot;">​</a></h2><p><strong>描述</strong>: 函数调用自身实现循环逻辑。</p><p><strong>示例</strong>:</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> factorial(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(factorial(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出: 120</span></span></code></pre></div><h2 id="汉诺塔" tabindex="-1">汉诺塔 <a class="header-anchor" href="#汉诺塔" aria-label="Permalink to &quot;汉诺塔&quot;">​</a></h2><ul><li>有 <strong>3 根柱子</strong>（A、B、C），其中 A 柱上有 <code>n</code> 个从大到小依次堆叠的圆盘。</li><li><strong>目标</strong>：将所有圆盘从 A 柱移动到 C 柱，规则如下： <ol><li>每次只能移动 <strong>最顶端的 1 个圆盘</strong>；</li><li><strong>大盘不能放在小盘上</strong>。</li></ol></li></ul><p><strong>递归思想</strong> 汉诺塔问题的核心是 <strong>将大问题分解为小问题</strong>：</p><ol><li>如果只有 <strong>1 个圆盘</strong>：直接 <code>A → C</code>。</li><li>如果有 <strong>n 个圆盘</strong>： <ul><li>先将 <strong>前 n-1 个圆盘</strong> 从 <code>A → B</code>（借助 C 作为中转）；</li><li>再将 <strong>第 n 个圆盘</strong> 从 <code>A → C</code>；</li><li>最后将 <strong>前 n-1 个圆盘</strong> 从 <code>B → C</code>（借助 A 作为中转）。</li></ul></li></ol><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hanoi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n, source, auxiliary, target):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    n: 圆盘数量</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    source: 起始柱（A）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    auxiliary: 中转柱（B）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    target: 目标柱（C）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 递归终止条件：直接移动最后一个圆盘</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;移动圆盘 1 从 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">source</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 到 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 步骤1：将前 n-1 个圆盘从 A → B（借助 C）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        hanoi(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, source, target, auxiliary)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 步骤2：将第 n 个圆盘从 A → C</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;移动圆盘 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 从 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">source</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 到 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 步骤3：将前 n-1 个圆盘从 B → C（借助 A）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        hanoi(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, auxiliary, source, target)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试代码（以 3 个圆盘为例）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hanoi(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>代码解释</strong><br></p><p><strong>关键思想</strong>：递归调用时，柱子的角色会动态变化，递归函数 hanoi(n, source, auxiliary, target) 的参数始终遵循以下顺序：</p><ul><li><strong>第1位</strong>：当前要移动的圆盘的来源柱（source）</li><li><strong>第2位</strong>：中转辅助柱（auxiliary）</li><li><strong>第3位</strong>：目标柱（target） 但每次递归调用时，这些“角色”会被重新分配给不同的柱子！</li></ul><p><strong>示例</strong>：</p><p>以<code> n=3</code> 为例，拆解全过程 假设初始调用是 <code>hanoi(3, A, B, C)</code>，目标是把3个圆盘从A移到C。</p><ul><li><p><strong>步骤1</strong>：<code>hanoi(n-1, source, target, auxiliary)</code> 也就是<code>hanoi(2, A, C, B)</code>。</p><ul><li>新来源：A（原来的来源）</li><li>新辅助：C（原来的目标）</li><li>新目标：B（原来的辅助） 任务变成：把前2个圆盘从A移动到B（此时B是新的目标柱，C充当辅助中转柱）。</li></ul></li><li><p><strong>步骤2</strong>：移动第3个圆盘 直接执行 <code>A → C</code>（此时最大的圆盘到位）。</p></li><li><p><strong>步骤3</strong>：<code>hanoi(n-1, auxiliary, source, target)</code> 也就是<code> hanoi(2, B, A, C)</code>。</p><ul><li>新来源：B（原来的辅助）</li><li>新辅助：A（原来的来源）</li><li>新目标：C（原来的目标） 任务变成：把前2个圆盘从B移动到C（此时A作为辅助中转柱）。</li></ul></li></ul><h4 id="运行结果" tabindex="-1"><strong>运行结果</strong> <a class="header-anchor" href="#运行结果" aria-label="Permalink to &quot;**运行结果**&quot;">​</a></h4><p>对于 <code>n = 3</code>，输出如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>移动圆盘 1 从 A 到 C</span></span>
<span class="line"><span>移动圆盘 2 从 A 到 B</span></span>
<span class="line"><span>移动圆盘 1 从 C 到 B</span></span>
<span class="line"><span>移动圆盘 3 从 A 到 C</span></span>
<span class="line"><span>移动圆盘 1 从 B 到 A</span></span>
<span class="line"><span>移动圆盘 2 从 B 到 C</span></span>
<span class="line"><span>移动圆盘 1 从 A 到 C</span></span></code></pre></div>`,62)]))}const E=i(t,[["render",h]]);export{o as __pageData,E as default};
