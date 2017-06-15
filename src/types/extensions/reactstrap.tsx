/* tslint:disable: no-unused-variable, no-any */
import * as ReactRouter from 'react-router-dom';
/* tslint:enable: no-unused-variable */

// Props copied from @types/reactstrap/lib/InputGroup
interface InputGroupProps {
  tag?: React.ReactType;
  size?: string;
  className?: string;
}

// TODO: Remove when this issue is addressed:
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17123

// Props copied from @types/reactstrap/lib/Button
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: string;
  disabled?: boolean;
  tag?: React.ReactType;

  onClick?: React.MouseEventHandler<any>;
  size?: any;
  id?: string;
  style?: React.CSSProperties;
}

export type Button = React.StatelessComponent<ButtonProps & Partial<ReactRouter.LinkProps>>;
export type InputGroup = React.StatelessComponent<InputGroupProps & React.HTMLAttributes<HTMLDivElement>>;
