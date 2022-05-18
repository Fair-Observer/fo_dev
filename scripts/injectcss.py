import os
dirname = os.path.dirname(__file__)

f = open(os.path.join(dirname, '../functions/index.js'),'r')
initialserver = f.read()

f.close()
g = open(os.path.join(dirname, '../css/main.css'),'r')
css = g.read()
g.close()

css = css.replace("\n","")

outputserve = initialserver.replace("!!!--STYLES-HERE--!!!", css)

h = open(os.path.join(dirname, '../functions/index.js'),'w')
h.write(outputserve)
h.close()

if os.path.exists("./dist/index_bundle.js.LICENSE.txt"):
	print "Found"
 	os.remove("./dist/index_bundle.js.LICENSE.txt")

print "Build completed!"