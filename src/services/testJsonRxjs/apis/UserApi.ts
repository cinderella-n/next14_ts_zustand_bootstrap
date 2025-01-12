// tslint:disable
/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.7
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    User,
} from '../models';

export interface CreateUserRequest {
    body: User;
}

export interface CreateUsersWithArrayInputRequest {
    body: Array<User>;
}

export interface CreateUsersWithListInputRequest {
    body: Array<User>;
}

export interface DeleteUserRequest {
    username: string;
}

export interface GetUserByNameRequest {
    username: string;
}

export interface LoginUserRequest {
    username: string;
    password: string;
}

export interface UpdateUserRequest {
    username: string;
    body: User;
}

/**
 * no description
 */
export class UserApi extends BaseAPI {

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    createUser({ body }: CreateUserRequest): Observable<void>
    createUser({ body }: CreateUserRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    createUser({ body }: CreateUserRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(body, 'body', 'createUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/user',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

    /**
     * Creates list of users with given input array
     */
    createUsersWithArrayInput({ body }: CreateUsersWithArrayInputRequest): Observable<void>
    createUsersWithArrayInput({ body }: CreateUsersWithArrayInputRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    createUsersWithArrayInput({ body }: CreateUsersWithArrayInputRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(body, 'body', 'createUsersWithArrayInput');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/user/createWithArray',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

    /**
     * Creates list of users with given input array
     */
    createUsersWithListInput({ body }: CreateUsersWithListInputRequest): Observable<void>
    createUsersWithListInput({ body }: CreateUsersWithListInputRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    createUsersWithListInput({ body }: CreateUsersWithListInputRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(body, 'body', 'createUsersWithListInput');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/user/createWithList',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    deleteUser({ username }: DeleteUserRequest): Observable<void>
    deleteUser({ username }: DeleteUserRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteUser({ username }: DeleteUserRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(username, 'username', 'deleteUser');

        return this.request<void>({
            url: '/user/{username}'.replace('{username}', encodeURI(username)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Get user by user name
     */
    getUserByName({ username }: GetUserByNameRequest): Observable<User>
    getUserByName({ username }: GetUserByNameRequest, opts?: OperationOpts): Observable<AjaxResponse<User>>
    getUserByName({ username }: GetUserByNameRequest, opts?: OperationOpts): Observable<User | AjaxResponse<User>> {
        throwIfNullOrUndefined(username, 'username', 'getUserByName');

        return this.request<User>({
            url: '/user/{username}'.replace('{username}', encodeURI(username)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Logs user into the system
     */
    loginUser({ username, password }: LoginUserRequest): Observable<string>
    loginUser({ username, password }: LoginUserRequest, opts?: OperationOpts): Observable<AjaxResponse<string>>
    loginUser({ username, password }: LoginUserRequest, opts?: OperationOpts): Observable<string | AjaxResponse<string>> {
        throwIfNullOrUndefined(username, 'username', 'loginUser');
        throwIfNullOrUndefined(password, 'password', 'loginUser');

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'username': username,
            'password': password,
        };

        return this.request<string>({
            url: '/user/login',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Logs out current logged in user session
     */
    logoutUser(): Observable<void>
    logoutUser(opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    logoutUser(opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        return this.request<void>({
            url: '/user/logout',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    updateUser({ username, body }: UpdateUserRequest): Observable<void>
    updateUser({ username, body }: UpdateUserRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    updateUser({ username, body }: UpdateUserRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(username, 'username', 'updateUser');
        throwIfNullOrUndefined(body, 'body', 'updateUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/user/{username}'.replace('{username}', encodeURI(username)),
            method: 'PUT',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

}
