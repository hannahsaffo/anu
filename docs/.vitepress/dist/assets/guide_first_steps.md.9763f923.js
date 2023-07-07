import{_ as s,o as a,c as n,O as l}from"./chunks/framework.eb48dd0f.js";const A=JSON.parse('{"title":"Hello Box","description":"","frontmatter":{},"headers":[],"relativePath":"guide/first_steps.md","filePath":"guide/first_steps.md"}'),o={name:"guide/first_steps.md"},e=l(`<h1 id="hello-box" tabindex="-1">Hello Box <a class="header-anchor" href="#hello-box" aria-label="Permalink to &quot;Hello Box&quot;">​</a></h1><p>Let&#39;s start with the absolute basics, adding a box mesh to our scene, and manipulating its initializing parameters with some data.</p><h2 id="add-a-box" tabindex="-1">Add a Box <a class="header-anchor" href="#add-a-box" aria-label="Permalink to &quot;Add a Box&quot;">​</a></h2><p>In this example, you can see how anu&#39;s create() function adds a mesh to the scene and returns the mesh. We can use Babylon&#39;s MeshBuilder method to achieve the same thing, and create() is largely meant to be an internal function for other anu methods. However, notice <a href="./../api/modules.html#create">create()</a> can take an optional argument &quot;data&quot;. When passed, the data object is appended to our mesh&#39;s metadata property and allows us to use this data to dynamically manipulate the mesh.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-vtsab" id="tab-Adlkp0N" checked="checked"><label for="tab-Adlkp0N">anu</label><input type="radio" name="group-vtsab" id="tab-2sAi7_a"><label for="tab-2sAi7_a">babylon</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//create(mesh: string, name: string, scene: Scene, options?: {}, data?: {})</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> box </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> anu</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ourBox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> scene</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//CreateBox(name: string, options?: {}, scene?: Scene)</span></span>
<span class="line"><span style="color:#A6ACCD;">BABYLON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MeshBuilder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CreateBox</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ourBox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> scene)</span></span></code></pre></div></div></div><iframe id="inlineFrameExample" title="Inline Frame Example" width="100%" height="400" src="/index.html/?example=box">
  </iframe><h2 id="using-data-and-functions" tabindex="-1">Using Data and Functions <a class="header-anchor" href="#using-data-and-functions" aria-label="Permalink to &quot;Using Data and Functions&quot;">​</a></h2><p>Anu&#39;s core philosophy is enabling you to manipulate the scene-graph and its meshes with data. We can begin to see how this is implemented when we pass data into <a href="./../api/modules.html#create">create()</a>. In this example, we pass some example data into our function. We can now use this data to dynamically set the initializing properties of our box mesh. Instead of passing a raw value in our options object, we can pass <a href="https://www.geeksforgeeks.org/javascript-anonymous-functions/" target="_blank" rel="noreferrer">anonymous functions</a> instead. These functions will be passed the variable &quot;d&quot; which is the data object we passed into this method. We can now return the value of the data we want to use by indexing our data object by key. Our functions can perform any valid javascript code so long as they return the appropriate value for the option we are setting, in this case a number.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-7kqzR" id="tab-yTfDQ1b" checked="checked"><label for="tab-yTfDQ1b">anu</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//create(mesh: string, name: string, scene: Scene, options?: {}, data?: {})</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> box </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> anu</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ourBox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      scene</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">goals</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">assits</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">depth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">points</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">points</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></div></div><iframe id="inlineFrameExample" title="Inline Frame Example" width="100%" height="400" src="/index.html/?example=box_data">
  </iframe><h2 id="binding-data-to-boxes" tabindex="-1">Binding Data to Boxes <a class="header-anchor" href="#binding-data-to-boxes" aria-label="Permalink to &quot;Binding Data to Boxes&quot;">​</a></h2><p>Instead of using <a href="./../api/modules.html#create">create()</a> to create and return a single mesh, we can use <a href="./../api/modules.html#bind">bind()</a> to create a mesh for each index data we pass to the method. We call the bind method and pass an array length 3 of our data. <a href="./../api/modules.html#bind">bind()</a> creates a mesh for each element of the array and binds the respective index of data to the meshes metadata property. In the same way as <a href="./../api/modules.html#create">create()</a>, we can use this data to manipulate the starting parameters of our meshes. But what if we want to manipulate other properties of our meshes such as their position? Notice that <a href="./../api/modules.html#bind">bind()</a> returns an instance of <a href="./../api/classes/Selection.html">Selection</a>, this will be the key to dynamically manipulating our scene-graphs.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-pUt7q" id="tab-ItjZV1E" checked="checked"><label for="tab-ItjZV1E">anu</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//bind(mesh: string, scene: Scene, options?: {}, data?: {})</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> boxes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> anu</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      scene</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">goals</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">assits</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">depth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">points</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      [</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">points</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">points</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">points</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                      ])</span></span></code></pre></div></div></div><iframe id="inlineFrameExample" title="Inline Frame Example" width="100%" height="400" src="/index.html/?example=box_bind">
  </iframe><h2 id="manipulating-boxes-with-selections" tabindex="-1">Manipulating Boxes with Selections <a class="header-anchor" href="#manipulating-boxes-with-selections" aria-label="Permalink to &quot;Manipulating Boxes with Selections&quot;">​</a></h2><p>We will cover <a href="./../api/classes/Selection.html">Selection</a> in more detail later on, however, here is a quick demo of what they can do. In this example, we use <a href="./../api/modules.html#bind">bind()</a> to create three boxes and return the resulting selection object to the variable &quot;boxes&quot;. We can use the selection object to method chain the provided methods of <a href="./../api/classes/Selection.html">Selection</a>, allowing us to dynamically set all the possible properties of Babylon meshes. Here, we simply use the data we bound to these three boxes to change their respective X, Y, and Z positions.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-KAKUs" id="tab-Nyf_hKm" checked="checked"><label for="tab-Nyf_hKm">anu</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//bind(mesh: string, scene: Scene, options?: {}, data?: {})</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> boxes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> anu</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      scene</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">goals</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">assits</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#82AAFF;">depth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">points</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">                      [</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">points</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">points</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">assits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">points</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                      )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  boxes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">positionX</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">goals)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">positionY</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">assits)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">positionZ</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">points)</span></span></code></pre></div></div></div><iframe id="inlineFrameExample" title="Inline Frame Example" width="100%" height="400" src="/index.html/?example=box_selection">
  </iframe><h2 id="whats-next" tabindex="-1">Whats Next <a class="header-anchor" href="#whats-next" aria-label="Permalink to &quot;Whats Next&quot;">​</a></h2><p>By this point, you should hopefully see how we can scale up these techniques to create and manipulate Babylon meshes to create data visualizations. In the following sections, we will work toward these goals more concretely. First by learning more about selections and how to use them, and then by building a 3D visualization from the ground up.</p>`,20),p=[e];function t(c,r,i,D,y,C){return a(),n("div",null,p)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
