import React, { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error internally if needed
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full rounded-3xl border border-zinc-800 bg-zinc-800/50 p-8 text-center shadow-2xl space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 text-[var(--accent-yellow)]">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
              <p className="mt-2 text-sm text-zinc-400">
                An unforeseen error occurred in this view. The rest of the application remains protected.
              </p>
            </div>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-6 py-3 text-sm font-bold text-zinc-900 shadow-lg transition-all hover:bg-[var(--accent-yellow-hover)] hover:scale-105"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
