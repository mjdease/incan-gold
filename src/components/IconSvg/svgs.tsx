import * as React from 'react';

export interface SvgProps {
  className?: string;
}

// CRA doesn't provide a way to import svg files for inline use.
// TODO: move svgs into own files when this is resolved
// https://github.com/facebookincubator/create-react-app/issues/1388

/* tslint:disable:max-line-length,jsx-self-close */
export const bolt: React.StatelessComponent<SvgProps> = (props: SvgProps) => (
  <svg className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="28" viewBox="0 0 14 28">
    <title>bolt</title>
    <path d="M13.828 8.844c0.172 0.187 0.219 0.453 0.109 0.688l-8.437 18.078c-0.125 0.234-0.375 0.391-0.656 0.391-0.063 0-0.141-0.016-0.219-0.031-0.344-0.109-0.547-0.438-0.469-0.766l3.078-12.625-6.344 1.578c-0.063 0.016-0.125 0.016-0.187 0.016-0.172 0-0.359-0.063-0.484-0.172-0.187-0.156-0.25-0.391-0.203-0.609l3.141-12.891c0.078-0.297 0.359-0.5 0.688-0.5h5.125c0.391 0 0.703 0.297 0.703 0.656 0 0.094-0.031 0.187-0.078 0.281l-2.672 7.234 6.188-1.531c0.063-0.016 0.125-0.031 0.187-0.031 0.203 0 0.391 0.094 0.531 0.234z"></path>
  </svg>
);

export const bomb: React.StatelessComponent<SvgProps> = (props: SvgProps) => (
  <svg className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
    <title>bomb</title>
    <path d="M8.922 9.203c-0.203-0.516-0.781-0.75-1.297-0.547-2.25 0.906-4.062 2.719-4.969 4.969-0.203 0.516 0.031 1.094 0.547 1.297 0.125 0.047 0.25 0.078 0.375 0.078 0.406 0 0.766-0.234 0.938-0.625 0.703-1.75 2.109-3.156 3.859-3.859 0.516-0.219 0.766-0.797 0.547-1.313zM23.641 3.641l0.719 0.719-3.813 3.797 1.062 1.062c0.391 0.391 0.391 1.031 0 1.422l-1 1c0.875 1.578 1.391 3.406 1.391 5.359 0 6.078-4.922 11-11 11s-11-4.922-11-11 4.922-11 11-11c1.953 0 3.781 0.516 5.359 1.391l1-1c0.391-0.391 1.031-0.391 1.422 0l1.062 1.062zM23.766 2.766c-0.094 0.094-0.219 0.156-0.344 0.156-0.141 0-0.266-0.063-0.359-0.156l-1.422-1.406c-0.187-0.203-0.187-0.516 0-0.719 0.203-0.187 0.516-0.187 0.719 0l1.406 1.422c0.203 0.187 0.203 0.516 0 0.703zM27.359 6.359c-0.109 0.094-0.234 0.141-0.359 0.141s-0.25-0.047-0.359-0.141l-1.406-1.422c-0.203-0.187-0.203-0.516 0-0.703 0.187-0.203 0.516-0.203 0.703 0l1.422 1.406c0.187 0.203 0.187 0.516 0 0.719zM28 3.5c0 0.281-0.219 0.5-0.5 0.5h-1.5c-0.281 0-0.5-0.219-0.5-0.5s0.219-0.5 0.5-0.5h1.5c0.281 0 0.5 0.219 0.5 0.5zM25 0.5v1.5c0 0.281-0.219 0.5-0.5 0.5s-0.5-0.219-0.5-0.5v-1.5c0-0.281 0.219-0.5 0.5-0.5s0.5 0.219 0.5 0.5zM27.359 1.359l-1.422 1.406c-0.094 0.094-0.219 0.156-0.344 0.156-0.141 0-0.266-0.063-0.359-0.156-0.203-0.187-0.203-0.516 0-0.703l1.406-1.422c0.203-0.187 0.516-0.187 0.719 0 0.187 0.203 0.187 0.516 0 0.719z"></path>
  </svg>
);

export const bug: React.StatelessComponent<SvgProps> = (props: SvgProps) => (
  <svg className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
    <title>bug</title>
    <path d="M25.5 15c0 0.547-0.453 1-1 1h-3.5c0 1.953-0.422 3.422-1.047 4.531l3.25 3.266c0.391 0.391 0.391 1.016 0 1.406-0.187 0.203-0.453 0.297-0.703 0.297s-0.516-0.094-0.703-0.297l-3.094-3.078s-2.047 1.875-4.703 1.875v-14h-2v14c-2.828 0-4.891-2.063-4.891-2.063l-2.859 3.234c-0.203 0.219-0.469 0.328-0.75 0.328-0.234 0-0.469-0.078-0.672-0.25-0.406-0.375-0.438-1-0.078-1.422l3.156-3.547c-0.547-1.078-0.906-2.469-0.906-4.281h-3.5c-0.547 0-1-0.453-1-1s0.453-1 1-1h3.5v-4.594l-2.703-2.703c-0.391-0.391-0.391-1.016 0-1.406s1.016-0.391 1.406 0l2.703 2.703h13.188l2.703-2.703c0.391-0.391 1.016-0.391 1.406 0s0.391 1.016 0 1.406l-2.703 2.703v4.594h3.5c0.547 0 1 0.453 1 1zM18 6h-10c0-2.766 2.234-5 5-5s5 2.234 5 5z"></path>
  </svg>
);

export const diamond: React.StatelessComponent<SvgProps> = (props: SvgProps) => (
  <svg className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28">
    <title>diamond</title>
    <path d="M3.313 12l9.734 10.391-4.688-10.391h-5.047zM16 24.063l5.453-12.063h-10.906zM8.406 10l3.187-6h-4.094l-4.5 6h5.406zM18.953 22.391l9.734-10.391h-5.047zM10.672 10h10.656l-3.187-6h-4.281zM23.594 10h5.406l-4.5-6h-4.094zM25.797 2.406l6 8c0.297 0.375 0.266 0.922-0.063 1.281l-15 16c-0.187 0.203-0.453 0.313-0.734 0.313s-0.547-0.109-0.734-0.313l-15-16c-0.328-0.359-0.359-0.906-0.063-1.281l6-8c0.187-0.266 0.484-0.406 0.797-0.406h18c0.313 0 0.609 0.141 0.797 0.406z"></path>
  </svg>
);

export const fire: React.StatelessComponent<SvgProps> = (props: SvgProps) => (
  <svg className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28">
    <title>fire</title>
    <path d="M22 26.5v1c0 0.266-0.234 0.5-0.5 0.5h-21c-0.266 0-0.5-0.234-0.5-0.5v-1c0-0.266 0.234-0.5 0.5-0.5h21c0.266 0 0.5 0.234 0.5 0.5zM18 10c0 5.984-7 6.516-7 10.5 0 1.094 0.547 2.547 1.047 3.5l-0.063-0.016 0.016 0.016c-4.312-1.984-8-4.719-8-10 0-5.984 7-6.516 7-10.5 0-1.094-0.547-2.547-1.031-3.5l0.047 0.016-0.016-0.016c4.312 1.984 8 4.719 8 10z"></path>
  </svg>
);

export const rocket: React.StatelessComponent<SvgProps> = (props: SvgProps) => (
  <svg className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
    <title>rocket</title>
    <path d="M22.5 7c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5 0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5zM26 2.5c0 5.187-1.437 8.641-5.141 12.359-0.906 0.891-1.937 1.813-3.047 2.75l-0.313 5.922c-0.016 0.156-0.109 0.313-0.25 0.406l-6 3.5c-0.078 0.047-0.156 0.063-0.25 0.063-0.125 0-0.25-0.047-0.359-0.141l-1-1c-0.125-0.141-0.172-0.328-0.125-0.5l1.328-4.312-4.391-4.391-4.312 1.328c-0.047 0.016-0.094 0.016-0.141 0.016-0.125 0-0.266-0.047-0.359-0.141l-1-1c-0.156-0.172-0.187-0.422-0.078-0.609l3.5-6c0.094-0.141 0.25-0.234 0.406-0.25l5.922-0.313c0.938-1.109 1.859-2.141 2.75-3.047 3.906-3.891 6.891-5.141 12.328-5.141 0.281 0 0.531 0.219 0.531 0.5z"></path>
  </svg>
);

export const trophy: React.StatelessComponent<SvgProps> = (props: SvgProps) => (
  <svg className={props.className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
    <title>trophy</title>
    <path d="M7.156 13.797c-0.656-1.437-1.156-3.344-1.156-5.797h-4v1.5c0 1.531 2.078 3.656 5.156 4.297zM24 9.5v-1.5h-4c0 2.453-0.5 4.359-1.156 5.797 3.078-0.641 5.156-2.766 5.156-4.297zM26 7.5v2c0 2.969-3.594 6.25-8.469 6.484-0.625 0.797-1.203 1.266-1.484 1.484-0.828 0.75-1.047 1.531-1.047 2.531s0.5 2 2 2 3 1 3 2.5v1c0 0.281-0.219 0.5-0.5 0.5h-13c-0.281 0-0.5-0.219-0.5-0.5v-1c0-1.5 1.5-2.5 3-2.5s2-1 2-2-0.219-1.781-1.047-2.531c-0.281-0.219-0.859-0.688-1.484-1.484-4.875-0.234-8.469-3.516-8.469-6.484v-2c0-0.828 0.672-1.5 1.5-1.5h4.5v-1.5c0-1.375 1.125-2.5 2.5-2.5h9c1.375 0 2.5 1.125 2.5 2.5v1.5h4.5c0.828 0 1.5 0.672 1.5 1.5z"></path>
  </svg>
);
/* tslint:enable:max-line-length,jsx-self-close */