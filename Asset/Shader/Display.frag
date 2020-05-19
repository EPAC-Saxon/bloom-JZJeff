#version 330 core

in vec2 vert_texcoord;

out vec4 frag_color;

uniform sampler2D Display;

void main()
{
	vec4 lighting = texture(Display, vert_texcoord);
	float brightness = dot(lighting.rgb, vec3(0.2126, 0.7152, 0.0722));
	//frag_color = vec4(1.0, 0.0, 0.0, 1.0);
}