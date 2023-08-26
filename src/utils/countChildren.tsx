import { Children, ReactNode, isValidElement } from "react";

export const filterRecursive = (children: ReactNode, filterFn: (child: ReactNode) => boolean): ReactNode[] => {
    return Children.toArray(children).reduce((acc: ReactNode[], child: ReactNode) => {
      if (filterFn(child)) {
        acc.push(child);
      }
      if (isValidElement(child) && child.props.children) {
        acc.push(...filterRecursive(child.props.children, filterFn));
      }
      return acc;
    }, []);
}