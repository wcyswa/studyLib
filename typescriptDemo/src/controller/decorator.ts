import {RequestHandler, Router} from "express";

export const router = Router();

enum Method {
    get = 'get',
    post = 'post',
    delete = 'delete',
    put = 'put'
}


export function controller(target: any) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        const method: Method = Reflect.getMetadata('method', target.prototype, key);
        const handler = target.prototype[key];
        const middlewares = Reflect.getMetadata('middlewares', target.prototype, key);
        if (path && method && handler) {
            if (middlewares && middlewares.length) {
                router[method](path, ...middlewares, handler)
            } else {
                router[method](path, handler);
            }
        }
    }
}

/*
* 中间件
* */
export function use(middleware: RequestHandler) {
    return function (target: any, key: string) {
        const originMiddlewares = Reflect.getMetadata('middlewares', target, key) || [];
        originMiddlewares.push(middleware);
        Reflect.defineMetadata('middlewares', originMiddlewares, target, key)
    }
}

function getRequestDecorator(type: string) {
    return function (path: string) {
        return function (target: any, key: string) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        }
    }
}


export const get = getRequestDecorator('get');
export const post = getRequestDecorator('post');

/*
* get,put,delete,post 如果每个方法都要向下面一样重写，就会造成代码冗余，所以考虑工厂模式
* */
/*
export function get(path: string) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', 'get', target, key);
    }
}

export function post(path: string) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', 'post', target, key);
    }
}*/
