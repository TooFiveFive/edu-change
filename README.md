# edu-change
Provide reputation incentive for universities to take and respond to feedback

## Links

[Trello](https://trello.com/b/pS4hy32F) - For non-code related tasks


[Initial concept](https://www.mindmeister.com/maps/public_map_shell/1188006260/edu-change?width=600&height=400&z=auto&t=20wnaR6osb&live_update=1)

## Run
0. (First time) `npm install`
1. Create a new file in `src/environments` called `keys.ts` with the following template:
    ```ts
    export const keys = {
        apiKey: '<API_KEY>',
    }
    ```
2. `npm start`
3. Wait for it to fail (Do not stop the `npm start`)
4. Save any .ts file

It will then re-compile (will get stuck at 68%-70%, just wait) and will be viewable on http://localhost:4200

## Contributors
[Eric Moynihan](https://github.com/TooFiveFive)
