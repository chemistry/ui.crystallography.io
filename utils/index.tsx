import React, { Children } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { StructureModel } from "../models";

export type HighlightFunction = (name: string) => string;

export const ActiveLink = withRouter( (({ router, children, ...props }: any) => {
    const child = Children.only(children);

    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
      className = `${className} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return <Link legacyBehavior {...props}>{React.cloneElement(child, { className })}</Link>;
}));

const CapitalizeFirstLetter = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};

export const CompoundName = ({ model, highlight}: { model: StructureModel, highlight?: HighlightFunction }) => {
    const compoundName = model.commonname || model.chemname || model.mineral;
    if (highlight && compoundName) {
        return (<span>CapitalizeFirstLetter(highlight(compoundName))</span>);
    }
    if (!compoundName && (model.formula || model.calcformula)) {
        return <CompoundFormula model={model} />;
    }

    return (
        <span>{ compoundName ? CapitalizeFirstLetter(compoundName) : "" || model.id}</span>
    );
};

export const CompoundFormula = ({ model }: { model: StructureModel }) => {
    let formula = model.formula || model.calcformula || '';
    formula = formula.replace(/[-\s+]/g, "");
    formula = formula.replace(/([\])a-zA-Z])([.,0-9]+)/g, (match, p1, p2) => {
        return p1 + "<sub>" + p2 + "</sub>";
    });
    return (<span dangerouslySetInnerHTML={{ __html: formula }}></span>);
};

export const JournalName = ({ model }: { model: StructureModel }) => {
  const nameTags: JSX.Element[] = [];
  const journal = model?.journal;
  if (journal || journal.year) {
      if (journal.journal) {
        nameTags.push(<i>{journal.journal + ' '}</i>);
      }
      if (journal.year) {
        nameTags.push(<b>({journal.year + ') '}</b>);
      }

      if (journal.volume) {
        nameTags.push(<>{journal.volume + ", "}</>);
      }

      if (journal.issue) {
        nameTags.push(<>{journal.issue + ' '}</>);
      }

      if (journal.firstpage || journal.lastpage) {
          let f = journal.firstpage || "";
          if (journal.lastpage) {
              f += "-" + journal.lastpage;
          }
          nameTags.push(<>{f}</>);
      }

      return <>{nameTags}</>;
  }

  return <></>;
};

const getAuthorDetails = (author: { name: string; link: string }, i: number, arr: any)=> {
    if (!author || !author.name) {
        return '';
    }
    if (author.link) {
        const authorUrl = '/author/' + encodeURIComponent(author.link);
        const authorName = author.name;
        return (<a href={authorUrl} title={author.name} key={i}>{authorName}</a>);
    }
    return (<span key={i}>{author.name}</span>);
}

export const AuthorsList = ({ model }: { model: StructureModel }) => {
  const authors = model?.journal?.authors;
  if (!authors || !Array.isArray(authors) || authors.length === 0) {
      return (<span></span>);
  }
  return (<span>{authors.map(getAuthorDetails)}</span>);
}
