var contents = $('#contents');
var contentsParent = contents.parent();
contents.remove();
contentsParent.prepend("This isn't supposoed to be here!");
contentsParent.prepend("Slither.png");

function facebook() {
const feed = document.getElementById('mount_0_0');
feed.parentNode.removeChild(feed);
}