export class PopupPage {
    constructor(
        public pageNumber: number,
        public content: string // or Node, RichText, etc. depending on your UI
    ) {}
}