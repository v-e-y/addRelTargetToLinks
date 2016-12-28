class AddNofollowToLinks {
    constructor() {
        this.pageLinks = document.links;
        this.pageLinksCount = document.links.length;
        this.host = window.location.hostname;
    }
    addNoFollow() {
        if (this.pageLinksCount > 1) {
            for (let i = 0; i < this.pageLinksCount; i++) {
                let link = this.pageLinks[i];
                if (this.host != link.hostname) {
                    link.setAttribute('rel', 'nofollow');
                }
            }
        }
    }
    addTargetBlank() {
        if (this.pageLinksCount > 1) {
            for (let i = 0; i < this.pageLinksCount; i++) {
                let link = this.pageLinks[i];
                if (this.host != link.hostname) {
                    link.setAttribute('target', '_blank');
                    if (link.attributes.rel && link.attributes.rel.nodeValue == 'nofollow') {
                        link.setAttribute('rel', 'nofollow noopener');
                    } else {
                        link.setAttribute('rel', 'noopener');
                    }
                }
            }
        }
    }
    addNoFollowAndTargetBlank() {
        if (this.pageLinksCount > 1) {
            for (let i = 0; i < this.pageLinksCount; i++) {
                let link = this.pageLinks[i];
                if (this.host != link.hostname) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'nofollow noopener');
                }
            }
        }
    }
}
