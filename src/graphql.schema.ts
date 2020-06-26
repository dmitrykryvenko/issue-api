
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

export interface IssueDeleteInput {
    id: string;
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

export interface IssueDeleteResponse {
    ok?: boolean;
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
    issueDelete?: IssueDeleteResponse;
}

export interface Issue {
    id: string;
    title: string;
    description: string;
    state?: EState;
    createdAt?: DateString;
}

export type JSON = any;
export type DateString = any;
