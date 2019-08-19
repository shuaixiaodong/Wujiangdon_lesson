## why
以前async mode 现在 concurrent mode,
目的：让react有一个顺序排比
  1. js单线程
  2. js解析
  3. http
3. js线程和ui是互斥的，js可以操作dom
4. 卡顿，js执行占据了很大的空间，导致ui得不到响应