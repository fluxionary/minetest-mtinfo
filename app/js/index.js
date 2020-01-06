

import imageresolver from './util/imageresolver.js';



m.request("./data/nodes.json")
.then(nodes => {
	const list = [];

	Object.keys(nodes)
	.map(name => nodes[name])
	.forEach(node => list.push(node));

	const rows = list
	.filter(node => !(node.groups && node.groups.not_in_creative_inventory == 1))
	.map(node => {
		return m("tr", [
			m("td", m("img", { src: imageresolver(node) })),
			m("td", node.name)
		]);
	});

	const table = m("table", [
		m("thead", [
			m("th", [
				m("td", "Image"),
				m("td", "Name")
			])
		]),
		m("tbody", rows)
	]);

	m.render(document.getElementById("app"), table);
});
