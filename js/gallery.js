/**
 * Created by Duarte on 10-05-2015.
 */
function gallery(){
    // Set of Photos
    this.photos = [];
    for(i = 1; i <= 10; i++)
        this.photos.push({src: getBaseURL() + '/img/gallery/' + i + '.jpg', desc: 'Image ' + i});
        // TODO: use library util -> this.photos.push({src: util.format('%s/img/gallery/%s.jpg', getBaseURL(), i), desc: 'Image ' + i});

    // initial image index
    this._Index = 0;

    // if a current image is the same as requested image
    this.isActive = function (index) {
        return this._Index === index;
    };

    // show prev image
    this.showPrev = function () {
        this._Index = (this._Index > 0) ? --this._Index : this.photos.length - 1;
    };

    // show next image
    this.showNext = function () {
        this._Index = (this._Index < this.photos.length - 1) ? ++this._Index : 0;
    };

    // show a certain image
    this.showPhoto = function (index) {
        this._Index = index;
    };
}
