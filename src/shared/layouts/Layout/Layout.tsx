import * as React from 'react';
import useBem from '../../../hooks/useBem';
import Header from '../Header';

interface ILayoutProps {
    children?: React.ReactNode,
}

export default function Layout(props: ILayoutProps) {
    const {bemBlock} = useBem('Layout');
    return (
        <div className={bemBlock()}>
            <Header />
            {props.children}
        </div>
    );
}
