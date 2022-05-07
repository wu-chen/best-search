import request from '@/utils/axios';

/**
 * 登录
 */

interface IResponseType<P = {}> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}
interface ILogin {
    token: string;
    expires: number;
}
export const login = (data: any) => {
    return request<IResponseType<ILogin>>({
        url: '/login',
        method: 'post',
        headers: {
            isToken: false
        },
        data
    });
};

// 获取验证码
export function getCodeImg() {
    return request({
        url: '/captchaImage',
        headers: {
            isToken: false
        },
        method: 'get',
        timeout: 20000
    });
}
