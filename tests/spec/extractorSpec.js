/**
 * Created by pery on 05/10/2015.
 */
var should = chai.should();
describe('take sentence and extract State variable', function () {
    it('extract Var from list', function () {

        var finded = fromList(['auranus'],'places');
        finded.should.be.include({
            i: 0,
            word: "auranus"
        })

    })
})