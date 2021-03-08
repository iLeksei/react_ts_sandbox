import React from 'react';

export default class ErrorBoundary extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:any): {hasError: boolean} {
        return { hasError: true };
    }

    componentDidCatch(error:any, errorInfo:any): void {
        console.log(error, errorInfo);
    }

    render() {
        const styles = {
          width: '100%',
          height: '100%',
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
        };

        if (this.state.hasError) {
            return <div style={styles}>Something went wrong.</div>;
        }

        return this.props.children;
    }
}