const makeDrag = (id) =>
{
    var pos = [0, 0, 0, 0];
    var elm = document.getElementById(id);
    if (elm)
    {
        elm.onmousedown = (e) =>
        {
            if (e.target.id === id + "-bar")
            {
                e.preventDefault();
                pos[2] = e.clientX;
                pos[3] = e.clientY;
                document.onmouseup = (e) =>
                {
                    document.onmouseup = null;
                    document.onmousemove = null;
                    document.getElementById(id + "-bar").style.cursor = 'grab';
                };
                document.onmousemove = (e) =>
                {
                    e.preventDefault();
                    pos[0] = pos[2] - e.clientX;
                    pos[1] = pos[4] - e.clientY;
                    pos[2] = e.clientX;
                    pos[4] = e.clientY;
                    elm.style.top = (elm.offsetTop - pos[1]) + "px";
                    elm.style.left = (elm.offsetLeft - pos[0]) + "px";  
                    document.getElementById(id + "-bar").style.cursor = 'grabbing';
                };
            }
        };
    }
    else
    {
        elm.onmousedown = (e) =>
        {
            if (e.target.id === id + "-bar")
            {
                e.preventDefault();
                pos[2] = e.clientX;
                pos[3] = e.clientY;
                document.onmouseup   = (e) =>
                {
                    document.onmouseup = null;
                    document.onmousemove = null;
                    document.getElementById(id + "-bar").style.cursor = 'grab';
                };
                document.onmousemove = (e) =>
                {
                    e.preventDefault();
                    pos[0] = pos[2] - e.clientX;
                    pos[1] = pos[4] - e.clientY;
                    pos[2] = e.clientX;
                    pos[4] = e.clientY;
                    elm.style.top = (elm.offsetTop - pos[1]) + "px";
                    elm.style.left = (elm.offsetLeft - pos[0]) + "px";
                    document.getElementById(id + "-bar").style.cursor = 'grabbing';
                };
            }
        };
    }
};
makeDrag('window-about');
makeDrag('window-projects');
makeDrag('window-contact');