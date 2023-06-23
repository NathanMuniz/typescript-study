
class contextForTest {
  name: string;
  db: string;
  cb: string;
};



class SetOfTest<T> {



}

class callback<testContext> {
  contextTest: testContext;
  beforeAll: string;
  beforeEach: string
  afterAll: string;
  afterEach: string

};

const createANewContext = (obj: Object): contextForTest => { return new contextForTest }


const createANewSetOfTestFromJest = (context: contextForTest) => {

  const createAnewCallback = (context: contextForTest): callback<contextForTest> => {
    return new callback
  }

  const createANewState = (context: contextForTest) => {

    const castContext = (context: contextForTest | callback<contextForTest>): contextForTest => {
      return new contextForTest
    }


    return new contextForTest;

  }

  const createLifeCiclyesThatShareSameContext = () => { }




}




