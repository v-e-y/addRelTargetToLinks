/**
 * Edward
 * v-e-y@outlook.com
 * free use
 */
class AddNofollowToLinks {
    pageLinks: HTMLCollection;
    pageLinksCount: number;
    // role: boolean;
    // target: boolean;
    host: string;

    // pageLinks: HTMLCollection, host: string, pageLinksCount: number, 
    // target: boolean, role: boolean
    constructor() {
        // All links in page
        this.pageLinks = document.links;
        // Count links in page
        this.pageLinksCount = document.links.length;
        // Hostname in page
        this.host = window.location.hostname;

        // this.role = !rel ? true : rel;
        // this.target = !target ? true : target;
    }

    // Add 'role="nofollow"' to link, exemple: <a href="http://www.exemple.com/some-url" title="Some page" rel="nofollow">some link</a>
    addNoFollow() {
        if (this.pageLinksCount > 1) {
            for (let i = 0; i < this.pageLinksCount; i++) {
                let link: Element = this.pageLinks[i];
                if (this.host != link.hostname) {
                    link.setAttribute('rel', 'nofollow');
                }
                
            }
        }
    }

    // Add 'target="_blank"' to link, exemple: <a href="http://www.exemple.com/some-url" title="Some page" target="_blank">some link</a>
    // And add noopener, why, you can read here - https://news.ycombinator.com/item?id=11553740
    addTargetBlank() {
        if (this.pageLinksCount > 1) {
            for (let i = 0; i < this.pageLinksCount; i++) {
                let link: Element = this.pageLinks[i];
                // if curent host != link host
                if (this.host != link.hostname) {
                    link.setAttribute('target', '_blank');
                    // додати перевірку на інші можливі значення
                    // if link have nofollow
                    if (link.attributes.rel && link.attributes.rel.nodeValue == 'nofollow') {
                        // Add noopener
                        link.setAttribute('rel', 'nofollow noopener');
                    } else {
                        // Else add only noopener
                        link.setAttribute('rel', 'noopener');
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
                    link.setAttribute('rel', 'nofollow noopener');
                }
            }
        }
    }
}
