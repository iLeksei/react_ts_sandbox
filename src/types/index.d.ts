interface TypedResponse<T = any> extends Response {
    /**
     * this will override `json` method from `Body` that is extended by `Response`
     * interface Body {
     *     json(): Promise<any>;
     * }
     */
    json<P = T>(): Promise<P>
}

