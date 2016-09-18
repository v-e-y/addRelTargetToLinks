
/**
 * name
 */
class AddNofollowToLinks {
    pageLinks: HTMLCollection;
    pageLinksCount: number;
    role: boolean;
    target: boolean;
    host: string;

    // pageLinks: HTMLCollection, host: string, pageLinksCount: number, 
    constructor(target: boolean, role: boolean) {
        this.pageLinks = document.links;
        this.pageLinksCount = document.links.length;
        this.host = window.location.hostname;
        this.role = !role ? true : role;
        this.target = !target ? true : target;
        
    }

    addNoFollow() {
        if (this.pageLinksCount > 1) {
            for (let i = 0; i < this.pageLinksCount; i++) {
                let link: Element = this.pageLinks[i];
                if (this.host != link.hostname) {
                    link.setAttribute('role', 'nofollow');
                }
                
            }
        }
    }

    addTargetBlank() {
        if (this.pageLinksCount > 1) {
            for (let i = 0; i < this.pageLinksCount; i++) {
                let link: Element = this.pageLinks[i];
                if (this.host != link.hostname) {
                    link.setAttribute('target', '_blank');
                    // додати перевірку на інші можливі значення
                    if (link.attributes.rel.nodeValue == 'nofollow') {
                        link.setAttribute('role', 'nofollow noopener');
                    } else {
                        link.setAttribute('role', 'noopener');
                    }
                    
                }
            }
        }
    }

    addNoFollowAndTargetBlank() {
        if (this.pageLinksCount > 1) {
            for (let i = 0; i < this.pageLinksCount; i++) {
                let link: Element = this.pageLinks[i];
                if (this.host != link.hostname) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('role', 'nofollow noopener');
                }
            }
        }
    }
}
