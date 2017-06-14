declare module 'react-resize-detector' {
  interface ReactResizeDetectorProps {
    handleWidth?: boolean;
    handleHeight?: boolean;
    onResize?(width?: number, height?: number): void;
  }

  var ReactResizeDetector: React.SFC<ReactResizeDetectorProps>;
  export default ReactResizeDetector;
}
