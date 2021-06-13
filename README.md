## サーバー起動
```bash
$ yarn run start:dev
```

## controllerの作成
```bash
# nest g co <コントローラー名>
$ nest g co users
```

`app.module.ts`には自動でコントローラーが追加される

### 役割
- ルーティング
- エンドポイント

## serviceの作成
```bash
# nest g s <サービス名>
$ nest g s users
```

これも同じく自動追加される。

### 役割
- contoller側の機能や処理を作成

## moduleの作成
```bash
# nest g module <モジュール名>
$ nest g module users
```

### 役割
- 各階層のモジュール化→ルートモジュールの肥大化・煩雑化を防ぐ


## middlewareの作成
```bash
# nest g mi <ミドルウェア名>
$ nest g mi logger
```

### 役割
- リクエストの解析
- レスポンスヘッダーの追加
- 不正アクセス禁止
