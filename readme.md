Anotation source code
=====================

This is the experiment play ground of annotation code for the amazon turk interface.

setup
-----
Requirement: `python3`, `nodejs npm and bower`, suggest to use `virtualenv`

```bash
git clone https://github.com/DarwinSenior/annotation.git
cd annotation
pip3 install flask
cd static
bower install
cd ..
python3 app.py
```

The server should be on the `localhost:8080`

current functionality
---------------------

- [x] show the video in the webpage
- [x] show frames on the webpage and pages
- [x] mask interaction, left drag add mask and right drag erase mask
- [x] slide bar to control the interaction radius
- [ ] preload contours for each page
- [ ] another window to show the segmentation result
- [ ] instruction
