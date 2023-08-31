import React, { Component, ErrorInfo } from 'react';
import { MdContainer, MdImg } from '../styles/General.styles';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <MdContainer>
          <MdImg src='./img/err.svg' alt='not found' />
          <h1>Something went wrong...</h1>
          <h2>Please reload page</h2>
        </MdContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
