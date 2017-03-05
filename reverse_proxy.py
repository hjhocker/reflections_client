# Copyright (c) Twisted Matrix Laboratories.
# See LICENSE for details.

"""
This example demonstrates how to run a reverse proxy.

Run this example with:
    $ python reverse-proxy.py

Then visit http://localhost:8080/ in your web browser.
"""

from twisted.internet import reactor
from twisted.web import proxy, server

site = server.Site(proxy.ReverseProxyResource('localhost', 8080, '/skills'))
reactor.listenTCP(9999, site)
reactor.run()
