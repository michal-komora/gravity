// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string
}

export type WebhookEvent = {
  body: string
  headers: Record<string, string | null | undefined>
}

export type GraphQLError = {
  path: Array<string | number>
  message: string
  extensions: Record<string, unknown>
}

export type CommitInput = {
  /**
   * The Ref to be updated.  Must be a branch.
   */
  branch?: {
    /**
     * The Node ID of the Ref to be updated.
     */
    id?: string
    /**
     * The nameWithOwner of the repository to commit to.
     */
    repositoryNameWithOwner?: string
    /**
     * The unqualified name of the branch to append the commit to.
     */
    branchName?: string
  }
  /**
   * The git commit oid expected at the head of the branch prior to the commit
   */
  expectedHeadOid?: unknown
  /**
   * The commit message the be included with the commit.
   */
  message?: {
    /**
     * The headline of the message.
     */
    headline: string
    /**
     * The body of the message.
     */
    body?: string
  }
  /**
   * A description of changes to files in this commit.
   */
  fileChanges?: {
    /**
     * Files to delete.
     */
    deletions?: Array<{
      /**
       * The path to delete
       */
      path: string
    }>
    /**
     * File to add or change.
     */
    additions?: Array<{
      /**
       * The path in the repository where the file will be located
       */
      path: string
      /**
       * The base64 encoded contents of the file
       */
      contents: unknown
    }>
  }
}

export type Commit = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    gitHub: {
      /**
  * Appends a commit to the given branch as the authenticated user.

This mutation creates a commit whose parent is the HEAD of the provided
branch and also updates that branch to point to the new commit.
It can be thought of as similar to `git commit`.

### Locating a Branch

Commits are appended to a `branch` of type `Ref`.
This must refer to a git branch (i.e.  the fully qualified path must
begin with `refs/heads/`, although including this prefix is optional.

Callers may specify the `branch` to commit to either by its global node
ID or by passing both of `repositoryNameWithOwner` and `refName`.  For
more details see the documentation for `CommittableBranch`.

### Describing Changes

`fileChanges` are specified as a `FilesChanges` object describing
`FileAdditions` and `FileDeletions`.

Please see the documentation for `FileChanges` for more information on
how to use this argument to describe any set of file changes.

### Authorship

Similar to the web commit interface, this mutation does not support
specifying the author or committer of the commit and will not add
support for this in the future.

A commit created by a successful execution of this mutation will be
authored by the owner of the credential which authenticates the API
request.  The committer will be identical to that of commits authored
using the web interface.

If you need full control over author and committer information, please
use the Git Database REST API instead.

### Commit Signing

Commits made using this mutation are automatically signed by GitHub if
supported and will be marked as verified in the user interface.

  */
      createCommitOnBranch: {
        /**
         * A unique identifier for the client performing the mutation.
         */
        clientMutationId: string
      }
    }
  }
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>
}

/**
 * An empty mutation to start from
 */
export function executeCommit(
  variables: CommitInput,
  options?: NetlifyGraphFunctionOptions
): Promise<Commit>

export type ExampleQuery = {
  /**
   * Any data from the function will be returned here
   */
  data: /** No fields, named fragments, or inline fragments found */ Record<
    string,
    unknown
  >
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>
}

/**
 * An example query to start with.
 */
export function fetchExampleQuery(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<ExampleQuery>

export type GetIssueBreakdownInput = {
  /**
   * Returns the elements in the list that come after the specified cursor.
   */
  after?: string
}

export type GetIssueBreakdown = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    gitHub: {
      /**
       * Lookup a given repository by the owner and repository name.
       */
      repository: {
        /**
         * A list of issues that have been opened in the repository.
         */
        issues: {
          /**
           * Identifies the total count of items in the connection.
           */
          totalCount: number
          /**
           * Information to aid in pagination.
           */
          pageInfo: {
            /**
             * When paginating backwards, the cursor to continue.
             */
            startCursor: string
            /**
             * When paginating forwards, are there more items?
             */
            hasNextPage: boolean
            /**
             * When paginating forwards, the cursor to continue.
             */
            endCursor: string
          }
          /**
           * A list of edges.
           */
          edges: Array<{
            /**
             * The item at the end of the edge.
             */
            node: {
              /**
               * Identifies the issue number.
               */
              number: number
              /**
               * Identifies the issue title.
               */
              title: string
              /**
               * The HTTP URL for this issue
               */
              url: string
              /**
               * Identifies the state of the issue.
               */
              state: 'OPEN' | 'CLOSED'
              /**
               * A list of events, comments, commits, etc. associated with the issue.
               */
              timelineItems: {
                /**
                 * Identifies the total count of items in the connection.
                 */
                totalCount: number
                /**
                 * Information to aid in pagination.
                 */
                pageInfo: {
                  /**
                   * When paginating backwards, the cursor to continue.
                   */
                  startCursor: string
                  /**
                   * When paginating forwards, are there more items?
                   */
                  hasNextPage: boolean
                  /**
                   * When paginating forwards, the cursor to continue.
                   */
                  endCursor: string
                }
              }
            }
          }>
        }
      }
    }
  }
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>
}

/**
 * Issue that allows querying GitHub for more information about issues.
 */
export function fetchGetIssueBreakdown(
  variables: GetIssueBreakdownInput,
  options?: NetlifyGraphFunctionOptions
): Promise<GetIssueBreakdown>
