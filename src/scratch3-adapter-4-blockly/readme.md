# 使用
我们需要在本地运行https服务。


在项目根目录创建Python文件


simple_https_server.py

```python
# python3
import http.server, ssl

server_address = ('localhost', 8601)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket,
                               server_side=True,
                               certfile='server.pem',
                               ssl_version=ssl.PROTOCOL_TLSv1)
httpd.serve_forever()
```

在根目录运行运行: `➜  blockly_dev git:(master) ✗ python3 simple_https_server.py`

打开: `https://127.0.0.1:8601/src/scratch3-adapter-4-blockly/`

