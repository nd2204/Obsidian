tag: #shader #opengl 

---
> [!important] note
> Uniforms are another way to pass data from our application on the CPU to the shaders on the GPU. Uniforms are however slightly different compared to vertex attributes. First of all, uniforms are global. Global, meaning that a uniform variable is unique per shader program object, and can be accessed from any shader at any stage in the shader program. Second, whatever you set the uniform value to, uniforms will keep their values until they’re either reset or updated.

To declare a uniform in GLSL we simply add the uniform keyword to a shader with a type and a name. From that point on we can use the newly declared uniform in the shader. Let’s see if this time we can set the color of the triangle via a uniform:

```cpp
#version 330 core
out vec4 FragColor;
uniform vec4 ourColor; // we set this variable in the OpenGL code.
void main() {
    FragColor = ourColor;
}
```


In order to use an uniform in opengl we first need to get its location in the gpu memory by using:

```cpp
int glGetUniformLocation(<shader_program>, <variable_name>);
// return an integer
```

and later use that return value to pass in to the set uniform function e.g:

```cpp
void glUniform4f(<location>, <x>, <y>, <z>, <w>);
// set uniform value
```

