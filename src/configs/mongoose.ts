import mongoose from 'mongoose';
import log from '../utils/logger';

const connectToDb = async (uri: string) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log.info('Connect to database successfully');
  } catch (e) {
    log.error('Can not connect to database', e);
    process.exit(1);
  }
};

export default connectToDb;
