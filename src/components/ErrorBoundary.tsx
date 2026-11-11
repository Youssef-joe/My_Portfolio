import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
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

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in UI tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="portal-frame p-6 min-h-screen bg-[var(--bg-canvas)] flex items-center justify-center">
          <div className="panel-card max-w-lg w-full">
            <div className="panel-card-header bg-[#a00000] text-white">
              <div className="panel-title text-white">
                <span>⚠ System Exception // Recovery Mode</span>
              </div>
              <span className="font-mono text-xs">FAULT_HALT</span>
            </div>
            <div className="panel-body space-y-4">
              <h2 className="text-base font-bold text-[var(--text-main)]">
                A rendering exception occurred in the portal view.
              </h2>
              <div className="p-3 bg-[var(--code-bg)] border border-[var(--border-light)] font-mono text-xs text-[var(--accent-red)] overflow-x-auto">
                {this.state.error?.message || 'Unknown runtime fault'}
              </div>
              <p className="text-xs text-[var(--text-sub)]">
                The portal execution harness caught this fault cleanly to prevent complete screen blanking.
              </p>
              <div className="flex gap-2 pt-2 border-t border-[var(--border-light)]">
                <a
                  href="/"
                  className="btn-retro text-xs font-bold"
                  onClick={() => {
                    this.setState({ hasError: false, error: null });
                  }}
                >
                  ↺ Reload Home Portal
                </a>
                <button
                  type="button"
                  className="btn-retro text-xs"
                  onClick={() => {
                    this.setState({ hasError: false, error: null });
                    window.location.reload();
                  }}
                >
                  Force Full Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

