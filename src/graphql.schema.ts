
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum EState {
    OPEN = "OPEN",
    PENDING = "PENDING",
    CLOSED = "CLOSED"
}

export interface IssueCreateInput {
    title: string;
    description: string;
}

export interface IssueUpdateInput {
    id: string;
    title?: string;
    description?: string;
    state?: EState;
}

export interface IMutation {
    _(): boolean | Promise<boolean>;
    issue(): IssueMutations | Promise<IssueMutations>;
}

export interface IQuery {
    _(): boolean | Promise<boolean>;
    getIssues(): IssuesResponse | Promise<IssuesResponse>;
}

export interface IssueResponse {
    ok?: boolean;
    issue?: Issue;
}

export interface IssuesResponse {
    data?: Issue[];
}

export interface IssueMutations {
    issueCreate?: IssueResponse;
    issueUpdate?: IssueResponse;
}

export interface Issue {
    id: string;
    title: string;
    description: string;
    state?: EState;
}

export type JSON = any;
