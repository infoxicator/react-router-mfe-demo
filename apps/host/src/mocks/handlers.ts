import { rest } from 'msw';

export const handlers = [
  rest.get('/assets/test', (req, res, ctx) => {
    const params = (new URL(req.url)).searchParams;
    const delayString = params.get('delay') || '200';
    const delay = parseInt(delayString);
    const text = params.get('text');    
    return res(
      ctx.delay(delay),
      ctx.json({
        text
      })
    );
  }),
  rest.get('/assets/error', (req, res, ctx) => {
    return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
    );
  }),
];
