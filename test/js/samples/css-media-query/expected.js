/* generated by Svelte vX.Y.Z */

import { appendNode, assign, createElement, detachNode, init, insertNode, noop, proto, setAttribute } from "svelte/shared.js";

function encapsulateStyles(node) {
	setAttribute(node, "svelte-2363328337", "");
}

function add_css() {
	var style = createElement("style");
	style.id = 'svelte-2363328337-style';
	style.textContent = "@media(min-width: 1px){div[svelte-2363328337],[svelte-2363328337] div{color:red}}";
	appendNode(style, document.head);
}

function create_main_fragment(state, component) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles(div);
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		p: noop,

		u: function unmount() {
			detachNode(div);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = options.data || {};

	if (!document.getElementById("svelte-2363328337-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);

export default SvelteComponent;